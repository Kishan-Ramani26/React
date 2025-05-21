import React, { useState } from "react";
import {useSearchParams} from 'react-router-dom'

const Home = () => {
  const [title, settitle] = useState("");
  const [TextArea, setTextArea] = useState("");
  const [serachParams, setSerachParams] = useSearchParams()
  const pasteID = serachParams.get("pasteID")

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-evenly gap-8">
          <input
            type="text"
            placeholder="Enter Title "
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="py-2 px-4 border border-white rounded-xl"
          />
          <button>{ pasteID ? "Update" : "Create"}</button>
        </div>
        <div>
          <textarea
            className="py-2 px-4 border border-white rounded-xl"
            placeholder="Enter Content "
            value={TextArea}
            onChange={(e) => setTextArea(e.target.value)}
            rows={10}
            cols={40}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Home;
