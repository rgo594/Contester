import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup'
import Quiz from './Quiz'

class Homepage extends Component {

  render(){

    return (
      localStorage.loggedIn ?
        <div class="ui center aligned text container">

            <button class="ui button" onClick={() => {window.location.replace('http://localhost:3001/profile')}}>Edit Profile</button>
            <button class="ui button" onClick={this.props.logOut}>Log Out</button>
          <div>
          <br></br>
          </div>
          <Quiz />
        </div>
        : window.location.replace('http://localhost:3001/login')
      );

    }
  }


export default Homepage;
