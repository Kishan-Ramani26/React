import React from "react";
import { useSelector } from "react-redux";

const ResulteCard = ({ item }) => {
  const activeTab = useSelector((store) => store.search.activeTab);
  const results = useSelector((store) => store.search.results);

  return;
  <>
    <div className="columns-[4_200pc] w-full h-auto ">
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
    </div>
    ;
  </>;
};

export default ResulteCard;
