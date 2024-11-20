import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setcolor] = useState("lightblue");

  return (
    <>
      <div className="w-full h-screen relative " style={{ backgroundColor: color }}></div>
      <div className='fixed flex flex-wrap justify-center  top-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-6 bg-white shadow-lg p-3 rounded-xl'>
          <button onClick={()=> setcolor("red")} className='border-none text-2xl px-4 py-1.5 rounded-xl ' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=> setcolor("orange")} className='border-none text-2xl px-4 py-1.5 rounded-xl' style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={()=>setcolor("lightblue")} className='border-none text-2xl px-4 py-1.5 rounded-xl' style={{ backgroundColor: "lightblue" }}>lightblue</button>
          <button onClick={()=>setcolor("black")} className='border-none text-2xl px-4 py-1.5 rounded-xl text-white' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setcolor("white")} className='border-none text-2xl px-4 py1.5 rounded-xl border-black' style={{ backgroundColor: "white" }}>White</button>
        </div>
      </div>

    </>
  )
}

export default App
