import { useState } from "react";
import "./App.css";

function App() {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpasword] = useState();
  const [cpassowrd, setcpassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    setusername("");
    setemail("");
    setpasword("");
    setcpassword("");
  };

  return (
    <>
      <div className="h-screen w-full bg-black text-white flex justify-center items-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" border-2 border-white px-25 py-5 flex items-start justify-center flex-col gap-2"
        >
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Passowrd : </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setpasword(e.target.value);
            }}
          />
          <br />
          <label htmlFor="cpassord">Confirm Passowrd : </label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            name="cpassowrd"
            id="cpassowrd"
            value={cpassowrd}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
          <br />
          <input
            type="submit"
            className="border-1 px-2 py-0.5 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default App;
