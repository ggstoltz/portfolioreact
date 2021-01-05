import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-bottom'>
                <p className='footer-bottom-heading'>
                    Made in MN
                </p>
                
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About</h2>
                    <Link to='/portfolio'>Portfolio</Link>
                </div>
                </div>
                </div>
                </div>
           
        
    );
}

export default Footer;
