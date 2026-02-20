import React from "react";
import { useDispatch } from "react-redux";

const Tabs = () => {
  const tabs = ["phtots", "videos", "collections"];
  const dispatch = useDispatch(); 
  return (
    <div>
      <div className="flex gap-4 justify-center mt-10">
        {tabs.map((tab, index) => {
          <button
            key={index}           
            className="bg-blue-500 active:scale-95 uppercase text-white px-4 py-2 rounded-lg ml-2 cursor-pointer"
             onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </button>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
