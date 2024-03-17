import React from 'react'
import Card from '../../reusableComponents/Card/Card'
import './prtofolio.css'

function Portofolio() {
  const cards = [
    {id:1,content:'Card1'},
    {id:2,content:'Card2'},
    {id:3,content:'Card3'},
    {id:4,content:'Card4'},
    {id:5,content:'Card5'},
    {id:6,content:'Card6'},
  ]
  return (
    <>
    <h1>Portofolio</h1>
    <div className='container'>

    <div className='row'>

          {cards.map((el)=>{
            return <Card content={el.content} id={el.id} key={el.id}/>
          })}

    </div>
    
    </div>
    </>
  )
}

export default Portofolio