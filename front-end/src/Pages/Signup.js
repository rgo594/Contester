import React from 'react';

class Signup extends React.Component{
  state= {
    username: '',
    password: '',
    avatar: '',
    exam: '',
    test_date: ''
  }

  handleSelect = (name) => {
    this.setState({
      exam: name
    })
  }

  handleChange = (event) => {
    console.log(event.target.name)
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
        exam: this.state.exam
      }
    })
  })
    .then(r => r.json())
    .then(r => console.log(r))
    alert(`Welcome ${this.state.username}`)
    window.location.replace('http://localhost:3001/login')
  }

  render(){
    console.log(this.state)
    return(
      <div>
      <form onSubmit={this.handleSignup}>
        <div>
        <p>Username
          <input type="text" name="username" onChange={this.handleChange} /></p>
        </div>
        <p>Password
          <input type="password" name="password" onChange={this.handleChange} /></p>
        <select  onChange={(e) => this.handleSelect(e.target.value)}>
          <option>Select Test</option>
          <option name="exam" value="SAT">SAT</option>
        </select>

        <input type="submit" value="Signup" />
      </form>
      <button onClick={() => window.location.replace('http://localhost:3001/login')}>Login</button>
      </div>
    )
  }
}

export default Signup
