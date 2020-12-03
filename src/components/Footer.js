import React from 'react';
import lambdaLogo from '../lambdalogo.png';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <img src={lambdaLogo} alt='lambda logo' />
            <p>&copy; Gina Russell 2020</p>
        </div>
    )
}
