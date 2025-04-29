import "./App.css";
import {useDispatch} from "react-redux";
import { Footer } from "./Components";
import Header from "./Components/Header/Header";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);



  return (
    <>
      <Header />
      <h1>Blog App</h1>
      <Footer />
    </>
  );
}

export default App;
