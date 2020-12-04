import React, {useState} from 'react';
import githubLogo from '../githublogo.png';
import './Header.css';

export default function Header(props){
    const [searchUser, setSearchUser] = useState('');
    const { updateUser } = props;

    const handleChange = (e) => {
        setSearchUser(e.target.value)
    }

    const searchForUser = (e) => {
        e.preventDefault();
        updateUser(searchUser);
        setSearchUser('');
    };

    return(
        <div className='header'>
            <img src={ githubLogo} alt='github logo' />
            <h1>GitHub User Cards</h1>
            <input type='text' name='newUser' value={searchUser} placeholder='...search for a new user' onChange={handleChange}/>
            <button onClick={searchForUser}>Search</button>
        </div>
    )
}