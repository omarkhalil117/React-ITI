import React from 'react'
import BasicProgressbar from '../../controls/basicProgressbar'

function Skills() {
  return (
    <>
    <div className='container p-5'>

    <h1 className='text-center'>Skills</h1>
        
        <BasicProgressbar percent={50} skill='Javascript'></BasicProgressbar>
        <BasicProgressbar percent={60} skill='HTML'></BasicProgressbar>
        <BasicProgressbar percent={70} skill='CSS'></BasicProgressbar>
        <BasicProgressbar percent={80} skill='python'></BasicProgressbar>

    </div>
    </>
  )
}

export default Skills