import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

const user = 'ginabethrussell';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: user,
      userData: ''
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        ...this.state,
        userData: response.data
      })
    })
    .catch(err => console.log(err))
  }

  // componentDidUpdate() {
  //   axios.get(`https://api.github.com/users/${this.state.user}`)
  //   .then(response => {
  //     console.log(this.state.user)
  //     this.setState({
  //       ...this.state,
  //       userData: response.data
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }
 
  // updateUser = (newUser) => {
  //   this.setState({
  //     ...this.state,
  //     user: newUser
  //   })
  // }

  
  render(){
    return (
      <div className="App">
        <UserCard userData={this.state.userData}/>
      </div>
    );
  } 
}

export default App;
