import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header11/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen bg-black text-white'>
        <Header />
      </div>
    </>
  )
}

export default App
