import React from "react";
import './Footer.css'
import instagram from '../../assets/images/instagram.png'
import whatsapp from '../../assets/images/whatsapp.png'

const Footer = () => {

    return(
    <div className="flex justify-center items-center">
        <div class="parent">
            <div class="card">
                <div class="logo">
                    <span class="circle circle1"></span>
                    <span class="circle circle2"></span>
                    <span class="circle circle3"></span>
                    <span class="circle circle4"></span>
                    <span class="circle circle5">
                        <span class="title-logo">AT</span>
                    </span>
                </div>
                <div class="glass"></div>
                <div class="content">
                    <span class="title">ANDREW TAROT</span>
                    <span class="text">Tarot, vida, muerte</span>
                </div>
                <div class="bottom">                    
                    <div class="social-buttons-container">
                        <a href="https://www.instagram.com/andrewtarot99?igsh=c3U0b2ptczk4N3A2" className="social-button social-button1" target="_blank" rel="noopener noreferrer">
                            <img className="svg" src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://wa.link/587ars" className="social-button social-button1" target="_blank" rel="noopener noreferrer">
                            <img className="svg" src={whatsapp} alt="Whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;