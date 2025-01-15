import React from 'react'

const Header = () => {
    return (
        <>
            <div className='w-screen fixed flex items-center justify-between px-10 py-5 z-50' >
                <div className='relative text-black mix-blend-difference'>
                    <img src='https://www.duten.com/wp-content/themes/duten/static/images/logo-duten.svg' className='mix-blend-difference' />
                </div>
                <div className='relative flex items-center justify-between flex-col gap-2'>
                    <div className='h-[0.01vw] w-[5vw] bg-black '></div>
                    <div className='h-[0.01vw] w-[3vw] bg-black '></div>
                    <div className='h-[0.01vw] w-[5vw] bg-black '></div>
                </div>
            </div>
        </>
    )
}

export default Header