import React, { Component } from 'react';
import Question from './Question'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Button } from 'semantic-ui-react'

const timer = 5

class QuestionList extends Component {

  state = {
    questions: [],
    filteredQuestions: [1],

    start: 0,
    end: 1,
    questIndex: 1,

    counter: timer,
    score: 0,
    p2Score: 2,

    display: false,
    btnDisplay: true,

    clicked: false
  }

  else = ''

  componentDidMount(){
    fetch('http://localhost:3000/questions')
      .then(response => response.json())
      .then(q => this.setState({
        questions: q.questions
      }));


    setInterval(() => {
      this.state.display ?
        (this.state.counter) > 0 ?
          (this.setState({ counter: --this.state.counter }))
          :
          this.nextQuest(1)

      : this.else = ''
    }, 1000)
  }

  nextQuest = (index) => {

    const toggleDisplay = this.state.questIndex > this.state.filteredQuestions.length - 1 ?
    !this.state.display : this.state.display

    this.setState({
      start: this.state.start + index,
      end: this.state.end + index,
      counter: timer,
      questIndex: this.state.questIndex + 1,
      display: toggleDisplay,
      clicked: false
     })

  }

  setScore = (x) => {
    this.setState({
      score: this.state.score + 1
    })
    x.target.style.backgroundColor = 'green'
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
      counter: timer,
      score: 0,
      filteredQuestions: [1],
      questIndex: 1,
      display: false,
      btnDisplay: true
    })
  }

  setClicked = (x) => {
    this.setState({
      clicked: x
    })
  }

  render() {

    let yeet = this.props.quizzes.find(quiz => quiz.subject)
    console.log(yeet)

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
        nextQuest={this.nextQuest}
        setClicked={this.setClicked}
        clicked={this.state.clicked}
        />
    })

    const postGameDisplay = () => {
      return <h1>Final Score: {this.state.score}</h1>
    }

    const showScore = this.state.questIndex > this.state.filteredQuestions.length ?
      <div>
        <h1>Final Score:{this.state.score}/{this.state.filteredQuestions.length} </h1>
        <button onClick={() => this.replay()}>Play again?</button>
      </div>
      :
      ''

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
            {localStorage.exam == "SAT" ?
            <div class="ui massive buttons">
              <button class="ui button" onClick={() => { this.filterQuestions(1) } }>SAT English 1</button>
              <button class="ui button" onClick={() => { this.filterQuestions(2) } }>SAT English 2</button>
              <button class="ui button" onClick={() => { this.filterQuestions(3) } }>SAT Math 1</button>
            </div>
            : localStorage.exam == "Series 7" ?
            <button onClick={() => { this.filterQuestions(4) } }>Series 7</button>
            : ''
            }
          </div>
          : ''
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
