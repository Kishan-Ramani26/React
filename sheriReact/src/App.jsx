import React, { useState } from 'react'



const App = () => {

  var [num,setnum] = useState(1)

  let add = () => {
    setnum(num++)
  }

  let rem = () =>{
    if (num > 1) {
      setnum(num--)
    }
    else{
      <h1>nagative value</h1>
    }
  }

  return (
    <div>
      <h2 className='text-5xl underline iteam-center'>Number is : {num}</h2>
      <button onClick={add}>To Add num</button>
      <button onClick={rem}>TO remover num</button>
    </div>
  )
}

export default App