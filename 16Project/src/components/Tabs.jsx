import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice.js";
import './Tabs.css';

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const tabRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0, visible: false });

  useEffect(() => {
    const parentEl = innerRef.current || containerRef.current;
    if (!parentEl) return;
    const idx = tabs.indexOf(activeTab);
    if (idx === -1) {
      setFocusRect((p) => ({ ...p, visible: false }));
      return;
    }

    const el = tabRefs.current[idx];
    if (!el) return;

    const parentRect = parentEl.getBoundingClientRect();
    const activeRect = el.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
      visible: true
    });
  }, [activeTab]);

  useEffect(() => {
    const handler = () => {
      const idx = tabs.indexOf(activeTab);
      if (idx === -1) return;
      const el = tabRefs.current[idx];
      const parentEl = innerRef.current || containerRef.current;
      if (!el || !parentEl) return;
      const parentRect = parentEl.getBoundingClientRect();
      const activeRect = el.getBoundingClientRect();
      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
        visible: true
      });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [activeTab]);

  return (
    <div
      className="tabs-outer"
      ref={containerRef}
      style={{
        '--border-color': '#60a5fa',
        '--glow-color': 'rgba(96,165,250,0.35)',
        '--blur-amount': '1.3px'
      }}
    >
      <div ref={innerRef} className="tabs-inner flex gap-4 justify-center mt-10">
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`${activeTab === tab ? `active` : ``} transition-all duration-400 active:scale-95 uppercase text-white px-4 py-2 rounded-lg ml-2 cursor-pointer tab-btn`}
              onClick={() => dispatch(setActiveTab(tab))}
            >
              {tab}
            </button>
          );
        })}

        <div
          className={`focus-frame ${focusRect.visible ? 'visible' : ''}`}
          style={{
            transform: `translate3d(${focusRect.x}px, ${focusRect.y}px, 0)` ,
            width: focusRect.width ? `${focusRect.width}px` : '0px',
            height: focusRect.height ? `${focusRect.height}px` : '0px'
          }}
        >
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
