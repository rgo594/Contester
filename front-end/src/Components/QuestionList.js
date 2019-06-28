import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends Component {

  state = {
    questions: [],
    start: 0,
    end: 1,
    counter: 100000,
    score: 0,
    filteredQuestions: [],
    display: false
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

  filterQuestions = (input_id) => {
    this.setState({
      display: true,
      filteredQuestions: this.state.questions.filter(question => {
       return question.quiz_id === input_id
    })})
  }

  render() {
    // const interval = setInterval(() => {
    //   this.setState({counter: --this.state.counter})
    //   }, 1000)
    console.log(this.state.filteredQuestions)

    const question = this.state.filteredQuestions.slice(this.state.start, this.state.end).map(q => {
      return <Question setScore={this.setScore} question={q} nextQuest={this.nextQuest} />
    })
    return (

      <div>
        <button onClick={() => {this.filterQuestions(1)} }>SAT</button>
        <button onClick={() => {this.filterQuestions(2)} }>Series 7</button>

        {this.state.display ?
        <div>
          <h1>Score: {this.state.score} </h1>
          {question}
        </div>
        : <h4>Choose a category</h4>
        }
      </div>
    );
  }

}


// {setTimeout(() => console.log('coo'), 1000)}

export default QuestionList;
