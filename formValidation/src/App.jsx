import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState();

  return (
    <>
      <div className="h-screen w-full bg-black text-white flex justify-center items-center">
        <form className=" border-2 border-white px-25 py-5 flex items-start justify-center flex-col gap-2">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
          />
          <br />
          <label htmlFor="password">Passowrd : </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
          <br />
          <label htmlFor="cpassord">Confirm Passowrd : </label>
          <input
            type="text"
            placeholder="Enter Confirm Password"
            name="cpassowrd"
            id="cpassowrd"
          />
          <br />
          <input type="submit" className="border-1 px-2 py-0.5" />
        </form>
      </div>
    </>
  );
}

export default App;
