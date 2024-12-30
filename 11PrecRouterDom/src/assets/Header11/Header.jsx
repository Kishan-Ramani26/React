import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-10 w-screen px-10 pt-5 text-white left-0 top-0 sticky z-50'>
            <NavLink className={({isActive})=> 'hover:cursor-pointer'}>
                Home
            </NavLink>
        </div>
    )
}

export default Header