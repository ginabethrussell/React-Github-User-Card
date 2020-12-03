import React from 'react';
import axios from 'axios';
import Follower from './Follower';

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
                <h3>{this.props.userData.name}</h3>
                <img src={this.props.userData.avatar_url}></img>
                <h3>Followers: </h3>
                    {
                        this.state.followers.map(follower => (
                            <Follower key={follower.avatar_url} followerData={follower} />
                            )
                        )
                    }
            </div>
        )
    }
}

export default UserCard;