import ResulteCard from "./ResulteCard";
import { searchUnsplash } from "../api/mediaAPI";
import {
  setError,
  setLoading,
  setQuery,
  setResults,
  clearResults  
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
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
          useDispatch(setResults(data));
          useDispatch(setLoading(false));          
        } catch (error) {
          console.error("Error in fetchImg (Unsplash):", error);
          useDispatch(setError("Failed to fetch photos. Please try again."));
        }
      }
    };
  }, [results, query, activeTab]);

  return (
    <>
      <div className="w-full h-auto bg-gray-300 mt-10 rounded-lg grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] text-2xl p-3 font-bold text-gray-700">
        <ResulteCard />
        <ResulteCard />
        <ResulteCard />
        <ResulteCard />
      </div>
    </>
  );
};

export default ResulteGrid;
