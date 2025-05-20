import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Component/Home";
import Pastes from "./Component/Pastes";
import ViwePaste from "./Component/ViwePaste";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/pastes",
          element: <ViwePaste />,
        },
        {
          path: "/pastes/:id",
          element: <Pastes />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
