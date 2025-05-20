import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex items-center justify-center border-t-1 py-5 border-white bottom-0 left-0 gap-7 w-full absolute ">
      <p className="text-2xl">Footer</p>
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
  )
}

export default Footer