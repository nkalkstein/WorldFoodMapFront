import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import UserRegistration from './components/UserRegistration'


class App extends Component {

state = {
    user: ""
  }


  // login = (name, password) => {
  //   fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({ name, password })
  //   })
 




  register = (name, password) => {
    console.log("clicked")
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name, password})
    }).then (res => res.json()).then(res => {
      this.setState({
        user: res
      })
    })
}


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src="http://www.clker.com/cliparts/Y/Y/I/0/D/0/planet-earth-md.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The World Food Map</h1>
          <h4> **Explore International Cuisine**</h4>
        </header>
        {this.state.user ? <Map/ > :

        <UserRegistration  register={this.register} />
      }
      </div>
    );
  }
}

export default App;
