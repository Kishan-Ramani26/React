import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [count,iscount] = useState(5);

  // let count = 5;

  let add = () => {
    count++;
    console.log(count);
   iscount(count); 
  }

  let remove = () => {
    count--;
    console.log(count);
    iscount(count);
  }

  return (
    <>
      <h1>Counter Function</h1>
      <h2>Count : {count}</h2>

      <button onClick={add}>Add number to {count}</button><br></br>
      <button onClick={remove}>Remove number to {count}</button>

    </>
  )
}

export default App
