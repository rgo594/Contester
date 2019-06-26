import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Signup from './Signup'

class Homepage extends Component {

  render(){
    console.log(this.props.test)
    return (

      localStorage.token ?
        <div>
          <button onClick={this.props.logOut}>Log Out</button>
        </div>
        : window.location.replace('http://localhost:3001/login')
      );

    }
  }


export default Homepage;
