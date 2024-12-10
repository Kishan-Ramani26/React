import { useState } from 'react'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'

function App() {


  return (
    <UsercontextProvider>
      <h1>hello</h1>
    </UsercontextProvider>
  )
}

export default App
