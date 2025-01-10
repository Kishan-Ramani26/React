import React, { useRef,useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function App() {

const reff = useRef();
const [val, setval] = useState(0)
const [valY, setvalY] = useState(0)
const random = gsap.utils.random(-500,500,100)
const randomY = gsap.utils.random(-500,500,100)

useGSAP(()=>{
  gsap.from(reff.current,{
    x:val,
    y:valY,
    duration:2,
    scale:0,
    opacity:0
  })
},[val,valY])

  return (
    <>
      <div className="h-screen w-full bg-black text-white flex items-center justify-center">
             <div ref={reff} className="h-40 w-40 bg-red-700 rounded-md relative cursor-pointer flex items-center justify-center active:scale-95" onClick={()=>{
              setval(random)
              setvalY(randomY)
             }}>👌
             </div>
      </div>
    </>
  )
}

export default App
