/* eslint-disable react/prop-types */
import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <>
    <div className='text-center m-3'>
        <h2 className='card p-5'>{props.content}</h2>
    </div>
    </>
  )
}

export default Card