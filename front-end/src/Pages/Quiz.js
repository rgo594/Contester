import React, { Component } from 'react';
import QuestionList from '../Components/QuestionList'

class Quiz extends Component {
  // state = {
  //   questions: ''
  // }
  //
  // componentDidMount() {
  //   fetch('http://localhost:3000/questions')
  //     .then(response => response.json())
  //     .then(x => this.setState({questions: x.questions }));
  // }
  //
  // filterQuestions = () => {
  //   this.state.questions
  // }

  render() {
    return (
      localStorage.token ?
      <div>
        <QuestionList />
      </div>
      : <h1>Need to login</h1>
    );
  }

}

export default Quiz;
