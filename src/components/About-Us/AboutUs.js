import React from 'react'
import BasicButtons from '../../controls/basicButtons';
import './aboutUs.module.css'
function AboutUs() {
    return ( 
    <>

    <div className='container row mt-5'>
    <h1 className='d-block col'>About Us</h1>

    <p className='d-block col'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the  standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of </p>
    </div>
        <BasicButtons variant='contained' text='Download CV' className='text-center'></BasicButtons>
    </> 
    );
}

export default AboutUs;