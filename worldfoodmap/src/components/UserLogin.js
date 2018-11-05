import React, { Component } from 'react';

export default class UserLogin extends Component {
  state = {
    name: '',
    password: ''
  }

//  handleChange(event) {
  //  this.setState({
  //    [event.target.name]: event.target.value
  //  })
  //}

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

//username

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.name, this.state.password)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }



  render() {
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
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          onChange={(event) => this.handleChange(event)}
        />
        <input type='submit' />
      </form>
    )
  }
}
