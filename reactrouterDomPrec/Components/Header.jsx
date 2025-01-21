import React from 'react'
import { Link,NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='w-full flex content-between items-center h-11 bg-cyan-300'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contect">Contect</NavLink>
    </div>
  )
}

export default Header