import React from 'react';
import githubLogo from '../githublogo.png';
import './Header.css';

export default function Header(){
    return(
        <div className='header'>
            <img src={ githubLogo} alt='github logo' />
            <h1>GitHub User Cards</h1>
            <input type='text' name='newUser' placeholder='...search for a new user'/>
        </div>
    )
}