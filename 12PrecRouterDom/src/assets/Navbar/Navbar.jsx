import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-screen h-15 bg-gray-100 text-white fixed top-0 left-0 z-50 flex items-center justify-start gap-14'>
                <NavLink to="" className={({isActive}) => `text-2xl hover:cursor-pointer ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    Home
                </NavLink>
                <NavLink to="about" className={({isActive}) => `text-2xl hover:cursor-pointer ${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    About
                </NavLink>
               
            </div>
        </>
    )
}

export default Navbar