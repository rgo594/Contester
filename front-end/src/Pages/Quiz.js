import React, { Component } from 'react';
import QuestionList from '../Components/QuestionList'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Quiz extends Component {
  state = {
    disp: false
  }

  work = () => {
    this.setState({
      disp: true
    })
  }

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

    return (
      localStorage.token ?
        <div>

          <button onClick={() => window.location.replace('http://localhost:3001')}>Home</button>
            <QuestionList />
        </div>
      : window.location.replace('http://localhost:3001/login')
    );
  }

}


// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={() => { this.work()}}
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
