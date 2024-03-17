/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <>
    <div className={`col-4 ${props.id %2 === 0 ? 'bg-black' : 'bg-grey'}`} >
        <h2 className='p-5 text-white'>{props.content}</h2>
    </div>
    </>
  )
}

export default Card