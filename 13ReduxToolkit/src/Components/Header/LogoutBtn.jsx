import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../Store/authSlice'
import authService, { AuthService } from '../../appwrite/auth'

const LogoutBtn = () => {

  const dispatch = useDispatch()
  const logoutHandler = () =>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  
  return (
    <button onClick={logoutHandler} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'>
      Logout
    </button>
  )
}

export default LogoutBtn