import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setinput] = useState(second);

  const submithandler = (e) =>{
    e.preventDefault();
    

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
