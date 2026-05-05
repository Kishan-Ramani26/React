import ResulteCard from "./ResulteCard";
import { searchUnsplash, VideoPexels } from "../api/mediaAPI";
import {
  setError,
  setLoading,
  setQuery,
  setResults,
  clearResults,
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import "./ResulteGrid.css";
import MetaBalls from "./MetaBalls";

const ResulteGrid = () => {
  const { results, loading, error, query, activeTab } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const currentIndexRef = useRef(null);
  const loadingStartRef = useRef(0);
  const [showLoading, setShowLoading] = useState(false);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  });
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        let mappedResponse = [];
        if (activeTab === "photos") {
          dispatch(clearResults());
          let response = await searchUnsplash(query);
          mappedResponse = response.map((item) => ({
            id: item.id,
            Type: "photo",
            src: item.urls.small,
            title: item.alt_description || "Photos",
            thumbnail: item.urls.small,
            URL: item.links.html
          }));
        } else if (activeTab === "videos") {
          dispatch(clearResults());
          let response = await VideoPexels(query);
          console.log("Raw Response:", response);
          mappedResponse = response.map((item) => ({
            id: item.id,
            Type: "video",
            src: item.video_files[0].link,
            title: item.user.name || "Video",
            thumbnail: item.image,
            URL: item.url
          }));
        }
        // console.log("Mapped Response:", mappedResponse);
        dispatch(setResults(mappedResponse));
      } catch (error) {
        console.error("Error fetching data:", error);

        dispatch(
          setError(
            "Failed to fetch data. Please try again.Error details: " +
              error.message,
          ),
        );
      } finally {
        dispatch(setLoading(false));
      }
    };
    getData();
  }, [query, activeTab, dispatch]); 

  useEffect(() => {
    const minLoadingMs = 450;
    if (loading) {
      loadingStartRef.current = performance.now();
      setShowLoading(true);
      return;
    }
    const elapsed = performance.now() - loadingStartRef.current;
    const remaining = Math.max(0, minLoadingMs - elapsed);
    const t = setTimeout(() => setShowLoading(false), remaining);
    return () => clearTimeout(t);
  }, [loading]);

  // reset refs when results change so indexes remain aligned
  useEffect(() => {
    itemRefs.current = [];
  }, [results]);

  const showFocus = (idx) => {
    const el = itemRefs.current[idx];
    const parent = containerRef.current;
    if (!el || !parent) return;
    const parentRect = parent.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    currentIndexRef.current = idx;
    setFocusRect({
      x: rect.left - parentRect.left + parent.scrollLeft,
      y: rect.top - parentRect.top + parent.scrollTop,
      width: rect.width,
      height: rect.height,
      visible: true,
    });
  };

  const hideFocus = () => {
    currentIndexRef.current = null;
    setFocusRect((p) => ({ ...p, visible: false }));
  };

  // keep frame aligned on resize
  useEffect(() => {
    const handleResize = () => {
      const idx = currentIndexRef.current;
      if (idx === null || idx === undefined) return;
      const el = itemRefs.current[idx];
      const parent = containerRef.current;
      if (!el || !parent) return;
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setFocusRect({
        x: rect.left - parentRect.left + parent.scrollLeft,
        y: rect.top - parentRect.top + parent.scrollTop,
        width: rect.width,
        height: rect.height,
        visible: true,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return (
      <div className="w-full bg-gray-300 columns-[4_400px] mt-10 rounded-lg  text-2xl p-3 max-sm:p-0 font-bold text-gray-700">
        {error}
      </div>
    );
  }

  if (showLoading) {
      return (
        <div className="w-full mt-10">
          <div className="loading-shell">
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              cursorBallSize={0}
              ballCount={15}
              animationSize={30}
              enableMouseInteraction={false}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </div>
        </div>
      );
    }

  return (
    <>
 
      <div className="w-full h-auto mt-10 px-5">
        <div
          ref={containerRef}
          className="results-grid w-full h-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4"
          onMouseLeave={hideFocus}
        >
          <div
            className={`media-focus-frame ${focusRect.visible ? "visible" : ""}`}
            style={{
              transform: `translate3d(${focusRect.x}px, ${focusRect.y}px, 0)`,
              width: focusRect.width ? `${focusRect.width}px` : "0px",
              height: focusRect.height ? `${focusRect.height}px` : "0px",
            }}
          >
            <span className="corner top-left"></span>
            <span className="corner top-right"></span>
            <span className="corner bottom-left"></span>
            <span className="corner bottom-right"></span>
          </div>

          
          {activeTab === "photos" &&
            results.map((item, idx) => (
              <div
                key={`${item.Type}-${String(item.id)}-${idx}`}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="w-full h-auto mb-4 result-item"
                onMouseEnter={() => showFocus(idx)}
                onMouseLeave={hideFocus}
              >
                <ResulteCard item={item} />
              </div>
            ))}
          {activeTab === "videos" &&
            results.map((item, idx) => (
              <div
                key={`${item.Type}-${String(item.id)}-${idx}`}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="w-full h-auto mb-4 result-item"
                onMouseEnter={() => showFocus(idx)}
                onMouseLeave={hideFocus}
              >
                <ResulteCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ResulteGrid;
