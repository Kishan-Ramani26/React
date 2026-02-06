import React from 'react'
import {searchUnsplash } from './api/mediaAPI'

const App = () => {


  return (
    <>
      <div>
        <button 
        onClick={()=>{
          searchUnsplash("cars")          
        }}
        className='p-2.5 border-red-100'
        >Get Photos</button>
      </div>
    </>
  )
}

export default App