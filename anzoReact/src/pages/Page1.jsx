import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Tilte from "../components/Tilte";
import Bottomtext from "../components/Bottomtext";

const Page1 = () => {
  const tRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoving = (e) => {
    setxVal(
      (e.clientX -
        tRef.current.getBoundingClientRect().x -
        tRef.current.getBoundingClientRect().width / 2) /
        50
    );
    setyVal(
      -(
        e.clientY -
        tRef.current.getBoundingClientRect().y -
        tRef.current.getBoundingClientRect().height / 2
      ) / 10
    );

    tRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  return (
    <>
      <div
        onMouseMove={(e) => {
          mouseMoving(e);
        }}
        className="h-screen w-full bg-white p-3 relative"
      >
        <div
          id="page1"
          className="h-full w-full relative py-[3vw] px-[5vw] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1865,h_907,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] rounded-[35px] shadow-[0_20px_50px_black]"
        >
          <img
            src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
            alt=""
          />

          <div ref={tRef} className="mt-28 w-fit" id="tiltediv">
            <h1 className="text-[4vw] text-white uppercase font-[anzo2]">
              I am <span className="text-black">DARK MODE</span>™
            </h1>
            <h1 className="text-[7.7vw] leading-[4.5vw] text-white font-[anzo2]">
              DESIGNER
            </h1>
            <h2 className="text-white text-[4vw] font-[anzo2]">TO HIRE</h2>
          </div>

          {/* <Tilte /> */}
          <Bottomtext />
        </div>
      </div>
    </>
  );
};
export default Page1;
