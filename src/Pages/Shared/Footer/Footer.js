import React from 'react';
import "./Footer.css";
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5'>    
            <p className='text-center'><small>copyright &copy; {year}</small></p> 
        </footer>
    );
};

export default Footer;