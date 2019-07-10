import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup'
import Quiz from './Quiz'

class Homepage extends Component {

  render(){
    return (
      localStorage.loggedIn ?
        <div class="ui center aligned container">
            <div class="ui buttons">
              <div class="ui huge buttons">
                <div id="banner">
                <button class="ui purple button" onClick={() => {window.location.replace('http://localhost:3001/profile')}}>Profile</button>
                <button class="ui purple button" onClick={() => window.location.replace('http://localhost:3001/highScores')}>High Scores</button>
                <button class="ui purple button" onClick={this.props.logOut}>Log Out</button>
                </div>
              </div>
            </div>
          <div>
          <br></br>
          </div>
          <div style={{margin: "15px"}}>
          <Quiz />
          </div>
        </div>
        : window.location.replace('http://localhost:3001/login')
      );

    }
  }


export default Homepage;
