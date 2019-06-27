import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends Component {

  state = {
    questions: [],
    start: 0,
    end: 1

  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(response => response.json())
      .then(x => this.setState({questions: x.questions }));
  }

  nextQuest = (x) => {
    this.setState({
      start: this.state.start + x,
      end: this.state.end + x,
     })
  }

  render() {
    console.log(this.state.end)
    const question = this.state.questions.slice(this.state.start, this.state.end).map(q => {
      return <Question question={q} nextQuest={this.nextQuest} />
    })

    return (
      <div>
        {question}
      </div>
    );
  }

}

export default QuestionList;
