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

  // Get initial user's github info and followers
  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      this.setState({
        ...this.state,
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
 
  // allow newUser to be requested from within Header and passed up to App
  updateUser = (newUser) => {
    if (newUser !== ''){
      this.setState({
        ...this.state,
        user: newUser
      })
    }
  }

  // Request newUser's data and followers after user state changes
   componentDidUpdate(prevProps, prevState){
     if (this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(response => {
          this.setState({
            ...this.state,
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
