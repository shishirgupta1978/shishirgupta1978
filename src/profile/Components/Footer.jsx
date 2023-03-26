import React from 'react'
import './Footer.css'
import {FaHome,FaLinkedin,FaMailBulk,FaPhone,FaFacebook,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:"2rem"}}/> 909090900</h4>
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:"2rem"}}/> abc@gmail.com</h4>
                </div>



            </div>
            <div className='right'>

            <h4>About the company</h4>
            <p>This is me shishir gupta. React Developer of company. I enjoy discussing new projects and design challengers.</p>
            <div className='social'>
            <FaFacebook size={30} style={{color:'#fff', marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:'#fff', marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:'#fff', marginRight:"1rem"}}/>

            </div>



            </div>

        </div>
      
    </div>
  )
}
import './footer.css'

export default Footer
