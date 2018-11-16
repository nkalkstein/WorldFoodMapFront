import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage'
import GMapTwo from './components/GMapTwo'



class App extends Component {

state = {
    user: ""
    }


  login = (name, password) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, password })
    })



  //
  //
  // register = (name, password) => {
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({name, password})
//     }).then (res => res.json()).then(res => {
//       this.setState({
//         user: res
//       })
//     })
// }





  render() {
    if (!this.state.user) {
    return (
      <div className="AppOne">
        <header className="App-header">
          <img src="http://www.clker.com/cliparts/Y/Y/I/0/D/0/planet-earth-md.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The World Food Map</h1>
          <h3 > Explore International Cuisine </h3>
        </header>
      <div >
        <MainPage user={this.state.user} register={this.register}/>
        <GMapTwo />
      </div>

      </div>


    );
  } else{
    return (
      <div className="App">
        <header className="Appy">
          <img src="http://www.clker.com/cliparts/Y/Y/I/0/D/0/planet-earth-md.png" className="App-logo" alt="logo" />
          <h1>The World Food Map</h1>
        </header>
      <div>
        <MainPage user={this.state.user} register={this.register}/>
      </div>

      </div>
      )


  }

  }
}

export default App;
