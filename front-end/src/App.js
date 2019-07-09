import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup'
import Homepage from './Pages/Homepage'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './Pages/Quiz'
import Profile from './Pages/Profile.js'
import HighScoresPage from './Pages/HighScoresPage.js'

class App extends React.Component {
  state = {
    loggedIn: false,
    allScores: {high_scores: []}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/high_scores`)
      .then(n => n.json())
      .then(n => this.setState({allScores: n})
      )
  }

  disp = () => {
    this.setState({
      disp: true
    })
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
    localStorage.clear()
  }

  render(){
    // const quiz = localStorage.token ?
    // <Route exact path ="/quiz" render={() => <Quiz />}/> : window.location.replace('http://localhost:3001/login')

    return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route path ="/login" render={() => <LoginPage loggedIn={this.state.loggedIn} logOut={this.logOut} logIn={this.logIn} />}/>
              <Route path ="/signup" component={Signup}/>
              <Route exact path ="/" render={() => <Homepage logOut={this.logOut}/>}/>
              <Route exact path ="/quiz" render={() => <Quiz />}/>
              <Route exact path ="/profile" render={() => <Profile />}/>
              <Route exact path ="/highScores" render={() => <HighScoresPage scores={this.state.allScores}/>}/>
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }

export default App;
