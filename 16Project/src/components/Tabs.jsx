import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice.js";

const Tabs = () => {
  const tabs = ["photos", "videos", "collections"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div>
      <div className="flex gap-4 justify-center mt-10">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={`${activeTab === tab ? `bg-blue-600` : `bg-gray-500`} transition-all duration-400 active:scale-95 uppercase text-white px-4 py-2 rounded-lg ml-2 cursor-pointer`}
              onClick={() => {
                dispatch(setActiveTab(tab));
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
