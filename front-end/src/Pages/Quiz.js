import React, { Component } from 'react';
import QuestionList from '../Components/QuestionList'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Quiz extends Component {
  state = {
    quizzes: []
  }

  componentDidMount(){
    console.log(`http://localhost:3000/users/${localStorage.user_id}`)
    fetch('http://localhost:3000/quizzes')
      .then(response => response.json())
      .then(x => this.setState({
        quizzes: x.quizzes.filter(quiz => {
       return quiz.subject === localStorage.exam})
      })
    )}

  render() {
    // const broadcast = () => {
    //   fetch('http://localhost:3000/broadcast')
    // }
    //
    // const testBroadcast = () => {
    //   return this.state.disp ?
    //    <h1>please</h1> : <p></p>
    //
    // }
    // console.log(this.state.quizzes)
    return (


      localStorage.loggedIn ?
        <div>
            <QuestionList quizzes={this.state.quizzes}/>
        </div>
      : window.location.replace('http://localhost:3001/login')
    );
  }

}


// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={() => { this.disp()}}
//   />
//
//   {testBroadcast()}
//
//   <button onClick={() => broadcast()}>broadcajst</button>

// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={(cool) => {
//     console.log('moo', cool)
//   }}
// />

export default Quiz;
