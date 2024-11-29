import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

export const Page2 = () => {


    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".rtext", {
            transform: 'rotateX(-90deg)',
            opacity: 0,
            duration: 1,
            stagger:0.5,
            scrollTrigger: {
                trigger: `.rtext`,
                start: `top 60%`,
                end: `top -200%`,
                scrub:2,
            }
        })
    })


    return (
        <>
            <div id='section2' className='relative bg-white p-20 text-center '>
                <h3 className='text-gray-500 font-[anzo3] text-xl mb-[10vw]'>©  anzo.studio 2024 | designed and developed</h3>
                <div className='rtext'>
                    <h1  className='text-[40vw] text-black font-[anzo4] font-thin uppercase leading-[30vw]'>IMPACTFUL</h1>
                </div>
                <div className='rtext'>
                    <h1  className='text-[40vw] text-black font-[anzo4] font-thin  uppercase leading-[33vw]'>DESIGN</h1>
                </div>
                <div className='rtext'>
                    <h1  className='text-[40vw] text-black font-[anzo4] font-thin  uppercase leading-[33vw]'>IS THE</h1>
                </div>
                <div className='rtext'>
                    <h1  className='text-[40vw] text-black font-[anzo4] font-thin  uppercase leading-[33vw]'>DESIGN</h1>
                </div>
                <div className='rtext'>
                    <h1  className='text-[40vw] text-black font-[anzo4] font-thin  uppercase leading-[33vw]'>THAT</h1>
                </div>
                <div className='rtext'>
                    <h1 className='text-[40vw] text-black font-[anzo4] font-thin  uppercase leading-[33vw]'>WORKS</h1>
                </div>
            </div>
        </>
    )
}
