import { useState } from 'react'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <UsercontextProvider>
      <Login />
      <h1>hello</h1>
      <Profile />
    </UsercontextProvider>
  )
}

export default App
