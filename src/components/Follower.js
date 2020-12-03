import React from 'react';

class Follower extends React.Component {
  
    render(){
        console.log(this.props.followerData)
        return (
            <div className='follower-wrapper'>
                <h3> GitHub Username: {this.props.followerData.login}</h3>
                <img src={this.props.followerData.avatar_url} alt='user avatar'/>
                <a href={this.props.followerData.html_url}>GitHub Profile</a>
            </div>
        )
    }
}

export default Follower;