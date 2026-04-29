import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const searchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const query = text.trim();
    console.log("Search query:", query);
    dispatch(setQuery(query));
    setText("");
  };


  return (
    <>
      <form className="flex gap-4 px-14 py-10" onSubmit={submitHandler}>
        <input
          required
          type="text"
          placeholder="Search for media..."
          className="w-full px-4 py-2  outline-none border-2 border-gray-300 rounded-[20px] focus:border-blue-500 transition-colors duration-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 active:scale-95 text-white px-6 py-2 text-[1.1vw] rounded-[20px] ml-2 cursor-pointer"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default searchBar;