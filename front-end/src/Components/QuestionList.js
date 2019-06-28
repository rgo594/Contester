import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends Component {

  state = {
    questions: [],
    start: 0,
    end: 1,
    counter: 100000,
    score: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(response => response.json())
      .then(x => this.setState({questions: x.questions }));
  }

  nextQuest = (x) => {
    this.setState({
      start: this.state.start + x,
      end: this.state.end + x
     })
  }

  setScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {

    const question = this.state.questions.slice(this.state.start, this.state.end).map(q => {
      return <Question setScore={this.setScore} question={q} nextQuest={this.nextQuest} />
    })

    return (
      <div>
        <h1>Score: {this.state.score} </h1>
        {question}
      </div>
    );
  }

}

export default QuestionList;
