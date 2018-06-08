import React, { Component } from 'react';

export default class UserRegistration extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.register(this.state.name, this.state.email, this.state.password)

  }

  render() {
    // if(this.state.name.length){
    //   return(
    //     <div>
    //     <map />
    //     </div>
    //     )
    // } else {
    return (
   
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='text'
          name='email'
          value={this.state.email}
          placeholder='Email'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          onChange={(event) => this.handleChange(event)}
        />
        <input type='submit' />
      </form>
    )
  // }
  }
}