import React from 'react'


const Box = (props) => {
  console.log(props.value);
  
  return (
    <div onClick={props.onClick} className='box'>{props.value}</div>
  )
}

export default Box