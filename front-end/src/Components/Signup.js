import React from 'react';

class Signup extends React.Component{
  state={
  username: '',
  password: ''
}



handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSignup = (event) => {
  event.preventDefault()
  console.log(this.state.username)
  console.log(this.state.password)
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password,
      }
    })
  })
  .then(r => r.json())
  .then(r => console.log(r))
  alert(`Welcome ${this.state.username}`)
}

  render(){
    return(
      <form onSubmit={this.handleSignup}>
          <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />

        <input type="submit" value="Signup" />
      </form>
    )
  }
}

export default Signup
