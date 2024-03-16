import React from 'react'
import BasicButtons from '../../controls/basicButtons';
import './footer.css'
function Footer() {
    return (  
        <>
        <div className='container p-5'>
        
            <div className='row'>
            
            <div className='col-4'>
            <h3>Get in touch</h3>

            <ul>
                <li>Linked In</li>
                <li>Gmail</li>
            </ul>

            </div>

            <div className='col-4'>
            <BasicButtons option='outlined' text='Send Email'/>
            </div>

            <div className='col-4'>
                <h3>Social Media</h3>
                
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                </ul>
            </div>
            </div>
        
        </div> 
        </>  
    );
}

export default Footer;