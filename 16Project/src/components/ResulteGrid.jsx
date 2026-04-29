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
import { useEffect } from "react";

const ResulteGrid = () => {
  const { results, loading, error, query, activeTab } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let mappedResponse = [];
        if (activeTab === "photos") {
          dispatch(clearResults());
          let response = await searchUnsplash(query);
          mappedResponse = response.map((item) => ({
            id: item.id,
            Type: "photo",
            src: item.urls.full,
            title: item.alt_description || "Photos",
            thumbnail: item.urls.small,
          }));
        } else if (activeTab === "videos") {
          dispatch(clearResults());
          let response = await VideoPexels(query);
          mappedResponse = response.map((item) => ({
            id: item.id,
            Type: "video",
            src: item.video_files[0].link,
            title: item.user.name || "Video",
            thumbnail: item.image,
          }));
        }
        console.log("Mapped Response:", mappedResponse);
        dispatch(setResults(mappedResponse));
      } catch (error) {
        console.error("Error fetching data:", error);

        dispatch(
          setError(
            "Failed to fetch data. Please try again.Error details: " +
              error.message,
          ),
        );
      }
    };
    getData();
  }, [query, activeTab]);

  if (error) {
    return (
      <div className="w-full bg-gray-300 columns-[4_400px] mt-10 rounded-lg  text-2xl p-3 max-sm:p-0 font-bold text-gray-700">
        {error}
      </div>
    );
  }

  // if (loading) {
  //     return (
  //       <div className="w-full bg-gray-300 columns-[4_400px] mt-10 rounded-lg  text-2xl p-3 max-sm:p-0 font-bold text-gray-700">
  //         Loading...
  //       </div>
  //     );
  //   }

  return (
    <>
      {/* <ResulteCard item={results} /> */}

      {
        <h1 className="text-2xl font-bold text-white">Results for "{query}"</h1>
      }
      <div className="w-full h-auto mt-10">
        <div className="w-full h-auto columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {activeTab === "photos" &&
            results.map((item) => (
              <div key={item.id} className="w-full h-auto mb-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          {activeTab === "videos" &&
            results.map((item) => (
              <div key={item.id} className="w-full h-auto mb-4">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0; // optional reset
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ResulteGrid;
