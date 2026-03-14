import React from "react";
import Dog from "./components/dog";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <Dog />
      </Canvas>
    </>
  );
}

export default App;
