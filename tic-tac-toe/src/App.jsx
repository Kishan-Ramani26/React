import { useState } from "react";
import "./App.css";
import Box from "./Component/Box";

function App() {
  const [boxes, setboxes] = useState(Array(9).fill(null));
  const [currentTrun, setcurrentTrun] = useState("X");

  const checkWinner = (stateCopy) => {
     const logic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
     ]

     for (let index = 0; index < logic.length; index++) {
      const [a,b,c] = logic[index]
      
      if(boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) return true
     }
     return false
  };

  const handleClick = (number) => {
    const stateCopy = Array.from(boxes);
    stateCopy[number] = currentTrun;
    
    const win = checkWinner(stateCopy);
    
    if(win){
      alert(`${currentTrun} is winner`)
    }
    
    setcurrentTrun(currentTrun === "X" ? "O" : "X");
    setboxes(stateCopy);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Box onClick={() => handleClick(0)} value={boxes[0]} />
          <Box onClick={() => handleClick(1)} value={boxes[1]} />
          <Box onClick={() => handleClick(2)} value={boxes[2]} />
        </div>
        <div className="row">
          <Box onClick={() => handleClick(3)} value={boxes[3]} />
          <Box onClick={() => handleClick(4)} value={boxes[4]} />
          <Box onClick={() => handleClick(5)} value={boxes[5]} />
        </div>
        <div className="row">
          <Box onClick={() => handleClick(6)} value={boxes[6]} />
          <Box onClick={() => handleClick(7)} value={boxes[7]} />
          <Box onClick={() => handleClick(8)} value={boxes[8]} />
        </div>
      </div>
    </>
  );
}

export default App;
