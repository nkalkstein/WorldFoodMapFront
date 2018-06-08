import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import UserRegistration from './UserRegistration'


class App extends Component {



  // login = (name, password) => {
  //   fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({ name, password })
  //   })

  login = (username, password, callback) => {
    fetch('http://localhost:3000/api/v1/donor_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token)
      localStorage.setItem('username', json.username)
      localStorage.setItem('user_id', json.user_id)
      localStorage.setItem('user_class', json.user_class)
    })

    callback("/")
  }



  register = (name, email, password) => {
    console.log("clicked")
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name, email, password })
    })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.clker.com/cliparts/Y/Y/I/0/D/0/planet-earth-md.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The World Food Map</h1>
        </header>
        <UserRegistration register={this.register} login={this.login}/>
      </div>
    );
  }
}

export default App;
