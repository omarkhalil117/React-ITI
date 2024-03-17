/* eslint-disable react/prop-types */
import React from 'react'
import './Card.module.css'
function Card(props) {
  const bgColor = props.id%2 ===0 ? 'black' : 'grey'
  return (
    <>
    <div className='text-center col-4 p-2 card' style={{backgroundColor:bgColor}}>
        <h2 className='p-5 text-white'>{props.content}</h2>
    </div>
    </>
  )
}

export default Card