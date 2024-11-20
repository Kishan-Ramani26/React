import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return(
        <>
            <div className='fixed w-full flex items-center justify-end py-[5vw] px-[4vw] z-10'>
                    <button className='text-[1.3vw] bg-black border-4 text-white px-8 py-2 rounded-[2vw] hover:bg-gray-500' >Hire me</button>
                    <i className="ri-more-2-fill text-3xl text-gray-500"></i>
                    <i className="ri-more-2-fill text-3xl ml-[-1vw] text-gray-500"></i>
                    <i className="ri-more-2-fill text-3xl ml-[-3vw] text-gray-500"></i>
            </div>
        </>
    )
}
export default Header;