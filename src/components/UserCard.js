import React from 'react';
import axios from 'axios';
import Follower from './Follower';
import './UserCard.css'

class UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            followers: []
        }
    }
    componentDidMount(){
        console.log(this.state.user);
        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(response => {
            this.setState({
                ...this.state,
                followers: response.data
            })
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className='user-card-wrapper'>
                <div className='user'>
                    <div className='user-title-wrapper'>
                        <h2>User Profile: {this.props.userData.name}</h2>
                        <img src={this.props.userData.avatar_url}></img>
                    </div>
                    <div className='user-info-wrapper'>
                        <ul>
                            <li>Bio: {this.props.userData.bio}</li>
                            <li>Location: {this.props.userData.location}</li>
                        </ul>
                    </div>
                </div>
                <h3>Followers: </h3>
                <div className='followers-wrapper'>
                    
                        {
                            this.state.followers.map(follower => (
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