import React, { useEffect } from "react";
import Dog from "./components/Dog";
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
          zIndex: "-1",
        }}
        className="bg-[url('./background-xl.png')] bg-cover bg-center"
      >
        <Dog />
      </Canvas>
      <div id="smooth-wrapper" className=" w-full relative">
        <div id="smooth-content" className=" w-full">
          <section className="section-1 h-[150svh]  w-full grid grid-cols-2 gap-20">
            <div className="h-screen w-full flex items-center justify-end  px-12">
              <div className="text-wrap w-[50%] leading-[6.3vw] text-right ">
                <h1 className="heroHeading text-[8vw]">We Make Good Shit</h1>
              </div>
            </div>
            <div className="h-[110svh] ">
              <div className="h-full py-4 w-full flex flex-col items-start gap-4 justify-end ">
                <div className="text-wrap w-[38%] text-left">
                  <p className="text-[1.2vw]">
                    Dogstudio is a multidisciplinary creative studio at the
                    intersection of art, design and technology.
                  </p>
                </div>
                <div className="text-wrap w-[38%] text-left">
                  <p className="text-[0.8vw] text-[#757da3]">
                    Our goal is to deliver amazing experiences that make people
                    talk, and build strategic value for brands, tech,
                    entertainment, arts & culture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-2 h-[150svh] w-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Scroll to see the effect
            </h1>
          </section>

          <section className="section-3 h-[150svh] w-full flex items-center justify-center">
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
