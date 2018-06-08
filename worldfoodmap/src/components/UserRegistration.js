import React, { Component } from 'react';

export default class UserRegistration extends Component {
  

  state = {
    name: '',
    password: ''
  }


 handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.register(this.state.name, this.state.password)

  }

  render() {
    
    return (

      <h2>
        Create an Account or Log In
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={(event) => this.handleChange(event)}
        />
        <br></br>
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          onChange={(event) => this.handleChange(event)}
        />
         <br></br>

        <input type='submit' />
      </form>
      </h2>
    )
   }
  
}