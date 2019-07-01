import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class LoginPage extends React.Component{
  state={
  username: '',
  password: '',
  token: ''
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleLogin = (event) => {
    event.preventDefault()

    // login using a POST request
    fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
  })
  .then(r => r.json())
  .then(data => {
      localStorage.setItem('token', data.jwt)
      localStorage.setItem('user_id', data.user.id)
      localStorage.setItem('username', data.user.username)
  })
    this.props.logIn()
    setTimeout(() => {window.location.replace('http://localhost:3001')}, 300)
  }

  render(){

    return(

      <div>
          <form onSubmit={this.handleLogin}>
            <p>Username
            <input type="text" name="username" onChange={this.handleChange} /></p>
            <p>Password
            <input type="password" name="password" onChange={this.handleChange} /></p>
            <input type="submit" value="Log In" />
          </form>
        <button onClick={() => window.location.replace('http://localhost:3001/signup')}>Signup</button>
      </div>
      )
    }
}

export default LoginPage
