import React from 'react'
import BasicProgressbar from '../../controls/basicProgressbar'
import './skills.module.css'
function Skills() {

  const skills = [
    {id:1,skill:'Javascript', percent:50},
    {id:2,skill:'HTML', percent:60},
    {id:3,skill:'CSS', percent:70},
    {id:4,skill:'Python', percent:80},
  ]

  return (
    <>
    <div className='container p-5'>

    <h1 className='text-center'>Skills</h1>
        {skills.map((el)=>{
          return <BasicProgressbar percent={el.percent} skill={el.skill} key={el.id}></BasicProgressbar>
        })}
    </div>
    </>
  )
}

export default Skills