import React, { Component } from 'react';
import QuestionList from '../Components/QuestionList'

class Quiz extends Component {

  render() {
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

export default Quiz;
