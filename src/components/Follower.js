import { render } from '@testing-library/react';
import React from 'react';

class Follower extends React.Component {
  

    render(){
        console.log(this.props.followerData.login)
        return (
            <div className='follower-wrapper'>
                <h3> GitHub Username: {this.props.followerData.login}</h3>
                <img src={this.props.followerData.avatar_url} alt='user avatar'/>
            </div>
        )
    }
}

export default Follower;