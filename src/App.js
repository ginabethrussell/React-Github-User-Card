import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  render(){
    return (
      <div className="App">
        GitHub User Cards
      </div>
    );
  } 
}

export default App;
