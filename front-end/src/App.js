import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import LoginPage from './Components/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <React.Fragment>
            <Router>
              <Switch>
                <Route exact path ="/" component={Homepage}/>
                <Route path ="/login" render={() => <LoginPage loggedIn={this.state.loggedIn} logOut={this.logOut} logIn={this.logIn} />}/>
                <Route path ="/signup" component={Signup}/>
              </Switch>
            </Router>
        </React.Fragment>
      );
    }
  }

export default App;
