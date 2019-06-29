import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup'
import Quiz from './Quiz'

class Homepage extends Component {

  render(){
    console.log(this.props.test)
    return (
        <div>
          <button onClick={this.props.logOut}>Log Out</button>
          <button onClick={() => window.location.replace('http://localhost:3001/quiz')}>Quiz</button>
        </div>
      );

    }
  }


export default Homepage;
