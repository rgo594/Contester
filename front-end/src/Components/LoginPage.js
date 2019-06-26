import React from 'react';

class LoginPage extends React.Component{
  state={
  username: '',
  password: '',
  token: ''
}


    // componentDidMount() {
    //   fetch('http://localhost:3000/profile', {
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${this.state.token}`
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(console.log)
    // }

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
    console.log(data)
    localStorage.setItem('token', data.jwt)
    localStorage.setItem('user_id', data.user.id)
    localStorage.setItem('username', data.user.username)
    localStorage.setItem('loggedIn', true)
  })
  this.props.logIn()
  window.location.replace('http://localhost:3001')
  }

  render(){
    const logInAlert = localStorage.loggedIn == "true" ? <h1> Logged In </h1> : console.log('Logged out')

    const logInBtn =  localStorage.loggedIn == "true" ? <button onClick={this.props.logOut}>Log Out</button> : <input type="submit" value="Log In" />

    console.log(this.props.loggedIn)

    return(
      <div>
      <form onSubmit={this.handleLogin}>
          <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />

        {logInBtn}
      </form>
      {logInAlert}
      </div>
    )
  }
}
// <h1>Welcome {localStorage.username}</h1>
// localStorage.username

export default LoginPage
