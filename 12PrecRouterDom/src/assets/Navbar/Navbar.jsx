import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-screen bg-gray-500 text-white fixed top-0 left-0 z-50 flex items-center justify-center'>
                <NavLink className={(isActive) => `text-2xl hover:cursor-pointer ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    Home
                </NavLink>
                <NavLink className={(isActive) => `text-2xl hover:cursor-pointer ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    About
                </NavLink>
                <NavLink className={(isActive) => `text-2xl hover:cursor-pointer ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    Contect
                </NavLink>
            </div>
        </>
    )
}

export default Navbar