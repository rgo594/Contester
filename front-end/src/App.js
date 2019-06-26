import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import LoginPage from './Components/LoginPage'

class App extends React.Component {
  state = {
  loggedIn: false
}

logIn = () => {
  this.setState({
    loggedIn: true
  })
  alert('Logged In')
}

logOut = () => {
  this.setState({
    loggedIn: false
  })
  alert('Logged Out')
  localStorage.clear()
}
  render(){
  return (
    <div>
     <Signup />
     <LoginPage loggedIn={this.state.loggedIn} logOut={this.logOut} logIn={this.logIn} />
    </div>
  );
  }
}

export default App;
