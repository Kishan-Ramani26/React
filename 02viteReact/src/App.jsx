import { useState } from "react"


function App() {

let [count ,setcount] = useState(1);




function add(){
  count++;
  setcount(count);
}


  return (
    <>
      <h1 className="bg-white">hello {count}</h1>
      <button onClick={add}> Up</button> 
    </>
  )
}

export default App
