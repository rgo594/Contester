import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup'
import Quiz from './Quiz'

class Homepage extends Component {

  exam = () => {
    fetch('http://localhost:3000/exam')
    .then(response => response.json())
    .then(console.log)
  }

  render(){

    console.log(this.props.test)
    return (
      localStorage.loggedIn ?
        <div class="ui center aligned text container">
          <button class="ui button" onClick={this.props.logOut}>Log Out</button>

          <Quiz />
        </div>
        : window.location.replace('http://localhost:3001/login')
      );

    }
  }


export default Homepage;
