import React from 'react'
import Card from '../../reusableComponents/Card/Card'

function Portofolio() {
  return (
    <>
    <h1>Portofolio</h1>
    <div className='container'>

    <div className='row'>
    
      <div className='col-4'>
          <Card content='Card 1'/>
      </div>

      <div className='col-4'>
          <Card content='Card 2'/>
      </div>

      <div className='col-4'>
          <Card content='Card 3'/>
      </div>

      <div className='col-4'>
          <Card content='Card 4'/>
      </div>

      <div className='col-4'>
          <Card content='Card 5'/>
      </div>      
      
      <div className='col-4'>
          <Card content='Card 6'/>
      </div>
    </div>
    {/* <Card content='Card 1'/> */}
    
    </div>
    </>
  )
}

export default Portofolio