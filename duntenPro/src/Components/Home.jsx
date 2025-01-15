import React from 'react'

const Home = () => {
  return (
    <>
      <div className='h-screen w-screen absolute -z-1'>
        {/* <video className='h-full w-full object-cover object-center' src='https://www.duten.com/wp-content/uploads/2024/06/video-duten-home.mp4' autoPlay="true" loop muted /> */}
        <video autoPlay loop muted src='./src/assets/video-duten-home.mp4'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='bottom-0 left-0 z-10 absolute px-10'>
        <h1 className='text-[7vw] text-black font-semibold tracking-tight'>A diagonal between</h1>
      </div>
    </>
  )
}

export default Home