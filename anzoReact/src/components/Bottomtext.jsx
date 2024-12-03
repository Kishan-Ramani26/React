import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

const Bottomtext = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        gsap.to(`.imgs img`,{
            rotate:360,
            duration:3,
            repeat:-1,
        })
    })

    return (
        <>
            <div className='absolute bottom-8 flex items-center justify-between w-[90%]'>
                <div>
                    <h1 className='text-white font-[anzo2] text-xl'>BRAND DESIGN | WEBSITE DESIGN</h1>
                    <h1 className='text-gray-500 font-[anzo3] leading-[1.2vw] text-xl'>BESPOKE FREELANCE</h1>
                </div>
                <div className='imgs flex items-center justify-between flex-col gap-5'>
                    <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                    <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default Bottomtext;