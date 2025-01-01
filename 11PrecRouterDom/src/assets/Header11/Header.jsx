import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-[5vw] w-screen px-10 pt-5 bg-black text-white left-0 top-0 sticky flex justify-between items-center z-50'>
            <NavLink to="/" className={({isActive})=> `hover:cursor-pointer ${isActive ? "text-orange-500" : "text-white"}`}>
                Home
            </NavLink>
            <NavLink to="/about" className={({isActive})=> `hover:cursor-pointer ${isActive ? "text-orange-500" : "text-white"}`}>
                About
            </NavLink>
            <NavLink to="/contect" className={({isActive})=> `hover:cursor-pointer ${isActive ? "text-orange-500" : "text-white"}`}>
                Contect
            </NavLink>
            <NavLink to="/GitHub" className={({isActive})=> `hover:cursor-pointer ${isActive ? "text-orange-500" : "text-white"}`}>
                Github
            </NavLink>
        </div>
    )
}

export default Header