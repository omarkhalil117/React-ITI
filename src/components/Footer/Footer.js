import React from 'react'
import BasicButtons from '../../controls/basicButtons';
import './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (  
        <>
        <div className='container p-5'>
        
            <div className='row'>
            
            <div className='col-4'>
            <h3>Get in touch</h3>

            <ul>
                <div className='d-flex justify-content-around align-items-center '>
                <FontAwesomeIcon className='d-block fs-1' icon={faLinkedin} />
                <li className='d-block fs-4 mx-2'>LinkedIn</li>
                </div>

                <div className='d-flex justify-content-around align-items-center '>
                <FontAwesomeIcon className='d-block fs-1' icon={faGoogle} />
                <li className='d-block fs-4 mx-2'>Gmail</li>
                </div>
            </ul>

            </div>

            <div className='col-4'>
            <BasicButtons variant='outlined' text='Send Email'/>
            
        </div>

            <div className='col-4'>
                <h3>Social Media</h3>
                
                <ul>
                    <div className='d-flex justify-content-around align-items-center '>
                    <FontAwesomeIcon className='d-block fs-1' icon={faFacebook} />
                    <li className='d-block fs-4 '>Facebook</li>
                    </div>

                    <div className='d-flex justify-content-around align-items-center '>
                    <FontAwesomeIcon className='d-block fs-1' icon={faInstagram} />
                    <li className='d-block fs-4 '>Instagram</li>
                    </div>

                    <div className='d-flex justify-content-around align-items-center '>
                    <FontAwesomeIcon className='d-block fs-1' icon={faTwitter} />
                    <li className='d-block fs-4 '>X</li>
                    </div>
                </ul>
            </div>
            </div>
        
        </div> 
        </>  
    );
}

export default Footer;