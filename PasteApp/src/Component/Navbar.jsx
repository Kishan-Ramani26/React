import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center border-b-1 py-5 border-white top-0 left-0 gap-7 w-full absolute ">
        <NavLink 
        to="/"
        className={({isActive})=>`text-2xl ${isActive ? "text-orange-400" : "text-white"}`}
        >Home
        </NavLink>

        <NavLink 
        to="/pastes"
        className={({isActive})=>`text-2xl ${isActive ? "text-orange-400" : "text-white"}`}
        >Pastes
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
