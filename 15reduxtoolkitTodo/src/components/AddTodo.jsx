import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";

const AddTodo = () => {
  const [input, setinput] = useState("");
    const dispatch = useDispatch();
    
  const submithandler = (e) =>{
    e.preventDefault();
    dispatch(addTodo(input))
    setinput('') 
  }

  return (
    <form onSubmit={submithandler}>
      <input
        type="text"
        placeholder="Add your todos..."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
