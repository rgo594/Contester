import React, { Component } from 'react';
import Question from './Question'
import { ActionCableConsumer } from 'react-actioncable-provider'

class QuestionList extends Component {

  state = {
    questions: [],
    filteredQuestions: [1],

    start: 0,
    end: 1,
    questIndex: 1,

    counter: 5,
    score: 0,
    p2Score: 2,

    display: false,
    btnDisplay: true
  }

  else = ''

  componentDidMount(){
    fetch('http://localhost:3000/questions')
      .then(response => response.json())
      .then(x => this.setState({questions: x.questions }));


    setInterval(() => {
      this.state.display ?
        (this.state.counter) > 0 ?
          (this.setState({ counter: --this.state.counter }))
          :
          setTimeout(() => {
          (this.nextQuest(1))
          }, 500)
          // this.nextQuest(1)
      : this.else = ''
    }, 1000)
  }



  nextQuest = (index) => {

    const toggleDisplay = this.state.questIndex > this.state.filteredQuestions.length - 1 ?
    !this.state.display : this.state.display


    this.setState({
      start: this.state.start + index,
      end: this.state.end + index,
      counter: 5,
      questIndex: this.state.questIndex + 1,
      display: toggleDisplay
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
      btnDisplay: false,
      filteredQuestions: this.state.questions.filter(question => {
       return question.quiz_id === input_id
      })
    })

  }

  replay = () => {
    this.setState({
      start: 0,
      end: 1,
      counter: 5,
      score: 0,
      filteredQuestions: [1],
      questIndex: 1,
      display: false,
      btnDisplay: true
    })
  }

  render() {

    const broadcast = () => {
      fetch('http://localhost:3000/broadcast')
    }

    const broadScore = () => {
      this.setState({
        score: this.state.score + 1
      })
    }

    const question = this.state.filteredQuestions.slice(this.state.start, this.state.end).map(q => {
      return <Question
        counter={this.state.counter}
        setScore={this.setScore}
        question={q}
        nextQuest={this.nextQuest} />
    })

    const postGameDisplay = () => {
      return <h1>Final Score: {this.state.score}</h1>
    }

    const showScore = this.state.questIndex > this.state.filteredQuestions.length ?
      <div>
        <h1>Final Score:{this.state.score} </h1>
        <button onClick={() => this.replay()}>Play again?</button>
      </div>
      :
      this.else = ''
//
    return (
      <div>

        {this.state.display ?
          <div>
            <h1>Score: {this.state.score} </h1>
            <h3>:{this.state.counter}</h3>
            <p>question {this.state.questIndex}/{this.state.filteredQuestions.length}</p>
            {question}
          </div>
          : this.state.btnDisplay ?
          <div>
            <h4>Choose a category</h4>
            <button onClick={() => {  this.filterQuestions(1) } }>SAT</button>
            <button onClick={() => {  this.filterQuestions(2) } }>Series 7</button>
          </div>
          : console.log('showscore shouldve been here')
        }

        {showScore}
      </div>
    );
  }
}

export default QuestionList;

// {setTimeout(() => console.log('coo'), 1000)}
// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={ () => { broadScore() } }
//   />
