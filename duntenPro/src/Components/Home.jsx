import React from 'react'

const Home = () => {
  return (
    <>
        <div className='h-screen w-screen relative'>
            {/* <video className='h-full w-full object-cover object-center' src='https://www.duten.com/wp-content/uploads/2024/06/video-duten-home.mp4' autoPlay="true" loop muted /> */}
            <video autoPlay loop muted src='./src/Components/video-duten-home.mp4'  
            className='h-full w-full object-cover object-center'
            />
        </div>
    </>
  )
}

export default Home