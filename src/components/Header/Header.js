import React from 'react'
import './header.css'
import image from '../../assets/landing-pages-that-convert.png' 
function Header() {
    return (  
        <>
        <div className='wrapper'>

        <img src={image}></img>

        <div className='centered'>
            <h1>Hello I&apos;m Omar</h1>
            <p>Web Developer</p>
        </div>
        
        </div>
        </>  
    );
}

export default Header;