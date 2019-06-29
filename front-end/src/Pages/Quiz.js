import React, { Component } from 'react';
import QuestionList from '../Components/QuestionList'

class Quiz extends Component {

  render() {
    return (
      <div>
      <button onClick={() => window.location.replace('http://localhost:3001')}>Home</button>
        <QuestionList />
      </div>

    );
  }

}

export default Quiz;
