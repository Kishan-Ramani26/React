import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-black text-white flex justify-center items-center">
        <form className=" border-2 border-white px-10 py-10 flex items-start justify-center flex-col gap-2">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
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
          
        </form>
      </div>
    </>
  );
}

export default App;
