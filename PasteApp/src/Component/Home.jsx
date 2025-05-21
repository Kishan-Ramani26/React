import React, { useState , useId } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToPaste } from "../Store/Slice";


const Home = () => {
  const [title, settitle] = useState("");
  const [TextArea, setTextArea] = useState("");
  const [serachParams, setSerachParams] = useSearchParams();
  const pasteID = serachParams.get("pasteID");
  const dispatch = useDispatch


  const createHandler = () => {
      const paste = {
        title : title,
        content : TextArea,
        _id : pasteID || Date.now().toString(36),
        createdAt : new Date().toISOString(),
      }

      if(pasteID){
        // update
        dispatch(updatePaste(paste))
      }else{
        // create
        dispatch(addToPaste(paste))
      }
  };

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
          <button onClick={createHandler()}>
            {pasteID ? "Update" : "Create"}
          </button>
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
