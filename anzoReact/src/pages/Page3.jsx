import React from 'react'

export const Page3 = () => {
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center relative'>
                <img src="./src/assets/photos/laptop.avif" alt='laptop img' className='h-[70%] relative z-10' />
                    <video autoPlay loop muted src='./src/assets/photos/video.mp4' className='absolute h-[60%] w-[48%] -z-10 object-cover object-center'/>
                    <div className='absolute -z-20 h-0.5 w-[60%] top-[40%] bg-black'></div>
                    <div className='absolute -z-20 h-0.5 w-[70%] top-[58%] bg-black'></div>
                    <div className='absolute -z-20 h-0.5 w-[100%] top-[75%] bg-black'></div>
            </div>
        </>
    )
}
