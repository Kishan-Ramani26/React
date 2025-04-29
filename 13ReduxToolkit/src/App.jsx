import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Footer } from "./Components";
import Header from "./Components/Header/Header";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/authSlice";
import {Outlet} from "react-router-dom"

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);

  // if (loading != true) {
  //   return null;
  // } else {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center flex-col">
  //       <div className="h-screen w-full flex items-center justify-between flex-col ">
  //         <Header />
  //         <main>
  //           <Outlet />
  //         </main>
  //         <Footer />
  //       </div>
  //     </div>
  //   )
  // }

  return !loading ? (
    <div className="min-h-screen flex items-center justify-center flex-col">
            <div className="h-screen w-full flex items-center justify-between flex-col ">
              <Header />
              <main>
                {/* < Outlet /> */}
              </main>
              <Footer />
            </div>
          </div> 
  )
  : null

}

export default App;
