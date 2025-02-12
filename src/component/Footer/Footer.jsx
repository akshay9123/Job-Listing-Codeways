import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">

                

                <p>JOB LISTING</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugit asperiores ducimus, earum incidunt libero veniam! Labore, quam laudantium itaque quas eveniet explicabo impedit error suscipit saepe autem dolores id.</p>

                <div className="footer-social-icons">
                    <FaFacebook />
                    <CiTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>91919919191</li>
                    <li>contact@bokachoda.com</li>
                </ul>
            </div>
            
        </div>
        <hr />

        <p className="footer-copyright">
            <p>Copyright is reserved</p>
        </p>
    </div>
  )
}

export default Footer