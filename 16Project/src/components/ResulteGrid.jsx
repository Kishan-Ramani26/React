import ResulteCard from "./ResulteCard";
import { VideoPexels, searchUnsplash } from "../api/mediaAPI";
import {
  setError,
  setLoading,
  setQuery,
  setResults,
  setActiveTab,
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store.js";
import { useEffect } from "react";

const ResulteGrid = () => {
  const { results, loading, error, query, activeTab } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const fetchImg = async () => {
      if (activeTab === "photos") {
        try {
          useDispatch(setLoading()); 
          const data = await searchUnsplash(query);
          console.log("Fetched Unsplash Data:", data);
        } catch (error) {}
      }
    };
  }, [results, query, activeTab]);

  return (
    <>
      <div className="w-full h-auto bg-gray-300 mt-10 rounded-lg grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] text-2xl p-3 font-bold text-gray-700">
        <ResulteCard />
        <ResulteCard />
        <ResulteCard />
      </div>
    </>
  );
};

export default ResulteGrid;
