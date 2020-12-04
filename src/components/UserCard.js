import React from 'react';
import axios from 'axios';
import Follower from './Follower';
import './UserCard.css'
import GitHubCalendar from 'react-github-calendar';


class UserCard extends React.Component {
    
    render(){
        console.log('followers:', this.props.followers)
        console.log(this.props)
        
        return(
            <div className='user-card-wrapper'>
                <div className='user'>
                    <div className='user-title-wrapper'>
                        <h2>User Profile: {this.props.userData.name}</h2>
                        <img src={this.props.userData.avatar_url}></img>
                    </div>
                    <div className='user-info-wrapper'>
                        <ul>
                            <li>Username: {this.props.userData.name}</li>
                            <li>Bio: {this.props.userData.bio}</li>
                            <li>Location: {this.props.userData.location}</li>
                            <li>Hireable: {this.props.userData.hireable}</li>
                            <li>Public Repos: {this.props.userData.public_repos}</li>
                            <li>Twitter username: {this.props.userData.twitter_username}</li>
                            <li><a href={this.props.userData.html_url}>GitHub Profile</a></li>
                        </ul>
                        <GitHubCalendar username={this.props.userData.login} blockSize={10}/>
                    </div>
                </div>
                <h3>Followers: </h3>
                <div className='followers-wrapper'>
                    
                        {
                            this.props.followers.map(follower => (
                                <Follower key={follower.avatar_url} followerData={follower} />
                                )
                            )
                        }
                </div>
            </div>
        )
    }
}

export default UserCard;