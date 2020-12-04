import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import Header from './components/Header';
import Footer from './components/Footer';

const user = 'ginabethrussell';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: user,
      userData: '',
      followers: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      console.log(response.data.followers_url);
      this.setState({
        ...this.state,
        userData: response.data
      });
      return response.data.followers_url;
    })
    .then(url => {
      axios.get(url)
      .then(response => {
        console.log(response.data)
        this.setState({
          ...this.state,
            followers: response.data
        })
      })
    })
    .catch(err => console.log(err))
  }
 
  updateUser = (newUser) => {
    console.log(newUser, 'calling update user');
    if (newUser !== this.state.user){
      axios.get(`https://api.github.com/users/${newUser}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          ...this.state,
          user: newUser,
          userData: response.data
        });
        return response.data.followers_url;
      })
      .then(url => {
        axios.get(url)
        .then(response => {
          this.setState({
            ...this.state,
              followers: response.data
          })
        })
      })
      .catch(err => console.log(err))
    }
  }
   

  
  render(){
    console.log('render invoked', this.state.user)
    console.log(this.state.userData);
    return (
      <div className="App">
        <Header updateUser={this.updateUser}/>
        <UserCard user={this.state.user} followers={this.state.followers} userData={this.state.userData}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
