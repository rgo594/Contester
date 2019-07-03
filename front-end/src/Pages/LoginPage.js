import React from 'react';
import 'semantic-ui-css/semantic.min.css';
// import { Button, Form, Segment, Message } from 'semantic-ui-react'


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
      localStorage.setItem('exam', data.exam)
      localStorage.setItem('loggedIn', true)
  })
    this.props.logIn()
  }

  render(){

    return(
      <div class="ui center aligned three column grid">

        <div class="column">
          <h1 class="ui purple image header">Login</h1>
          <form class="ui center aligned form" onSubmit={this.handleLogin}>
              <div class="ui stacked segment">
                <div class="ui huge left icon input" >
                  <i class="user icon"> </i>
                  <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
                </div>

                <div class="column">
                  <br></br>
                </div>

                <div class="column">
                <div class="ui huge left icon input" >
                  <i class="lock icon"> </i>
                  <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                </div>

                <div class="column">
                  <br></br>
                </div>

                </div>
                <input onClick={() => setTimeout(() => {window.location.replace('http://localhost:3001')}, 300) } class="ui submit button" type="submit" value="Log In" />
                <button class="ui submit button" onClick={() => window.location.replace('http://localhost:3001/signup')}>Signup</button>
              </div>

          </form>
        </div>
      </div>
      )
    }
}

export default LoginPage
