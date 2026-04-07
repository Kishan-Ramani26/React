import React, { useEffect } from "react";
import Dog from "./components/dog";
import { Canvas } from "@react-three/fiber";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
      effects: true,
      smoothTouch: 0.5,
      ease: "power3.out",
    });
    return () => smoother.kill();
  }, []);

  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <Dog />
      </Canvas>
      <div id="smooth-wrapper" className=" w-full relative">
        <div id="smooth-content" className=" w-full">
          <section className="section-1 h-screen w-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Dog Studio</h1>
          </section>

          <section className="section-2 h-screen w-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Scroll to see the effect
            </h1>
          </section>

          <section className="section-3 h-screen w-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Scroll to see the effect
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
