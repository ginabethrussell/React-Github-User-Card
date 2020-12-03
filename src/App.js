import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import Header from './components/Header';

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
    axios.get(`https://api.github.com/users/${this.state.user}`)
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
  //   console.log(this.state.user);
  //   axios.get(`https://api.github.com/users/${this.state.user}`)
  //   .then(response => {
  //     console.log(response.data)
  //     // this.setState({
  //     //   ...this.state,
  //     //   userData: response.data
  //     // })
  //   })
  //   .catch(err => console.log(err))
  // }
 
  updateUser = (newUser) => {
    console.log(newUser, 'calling update user');

    axios.get(`https://api.github.com/users/${newUser}`)
    .then(response => {
      console.log(response.data)
      this.setState({
        ...this.state,
        user: newUser,
        userData: response.data
      })
    })
    .catch(err => console.log(err))
  }

  
  render(){
    console.log('render invoked', this.state.user)
    return (
      <div className="App">
        <Header />
        <UserCard user={this.state.user} userData={this.state.userData}/>
        <button onClick={() => this.updateUser('mbr4477')}>Check out MBR4477</button>
      </div>
    );
  } 
}

export default App;
