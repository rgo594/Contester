import React, { Component } from 'react';
import Question from './Question'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Button } from 'semantic-ui-react'

const timer = 45

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
    hiScore: '',

    times_taken: 0,

    display: false,
    btnDisplay: true,

    clicked: false

  }

  // html {
  //   font-size: 20px;
  // }

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
    fetch(`http://localhost:3000/high_scores/${localStorage.user_id}`)
      .then(n => n.json())
      .then(n =>

    this.setState({
        display: true,
        btnDisplay: false,
        hiScore: n.high_score.score,
        times_taken: n.high_score.times_taken,
        filteredQuestions: this.state.questions.filter(question => {
         return question.quiz_id === input_id
      })
    })
  )

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

  handleScore = () => {
    const showScore = <div>
      <h1 style={{fontSize: 40}}>Final Score:{this.state.score}/{this.state.filteredQuestions.length} </h1>
      <button style={{fontSize: 20}} class="ui toggle button" onClick={() => this.replay()}>Play again?</button>
    </div>

    const highScore = fetch(`http://localhost:3000/high_scores/${localStorage.user_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          high_score: {
            subject: localStorage.exam,
            score: this.state.score + this.state.hiScore,
            times_taken: this.state.times_taken + this.state.filteredQuestions.length
          }
        })
      })
      .then(r => r.json())
      .then(r => console.log(r))
    return showScore
    return highScore
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
        nextQuest={this.nextQuest}
        setClicked={this.setClicked}
        clicked={this.state.clicked}
        />
    })

    const postGameDisplay = () => {
      return <h1>Final Score: {this.state.score}</h1>
    }

    const score = this.state.questIndex > this.state.filteredQuestions.length ?
      this.handleScore()
      :
      ''

    return (
      <div>

        {this.state.display ?
          <div class="ui center aligned text container">
            <h1 style={{fontSize: 40}}>Score: {this.state.score} </h1>
            <h3 style={{fontSize: 30}}>:{this.state.counter}</h3>
            <p style={{fontSize: 20}}>question {this.state.questIndex}/{this.state.filteredQuestions.length}</p>
            {question}
          </div>
          : this.state.btnDisplay ?
          <div>

            {localStorage.exam == "SAT" ?
            <div class="ui center aligned text container">
            <h4 style={{fontSize: 40}}>Choose a category</h4>
              <div class="ui vertical massive buttons">
                <button class="ui button" onClick={() => { this.filterQuestions(1) } }>SAT English 1</button>

                <button class="ui button" onClick={() => { this.filterQuestions(2) } }>SAT English 2</button>
              </div>

              <div class="ui vertical massive buttons">
                <button class="ui button" onClick={() => { this.filterQuestions(3) } }>SAT Math 1</button>
              </div>
            </div>
            : localStorage.exam == "Series 7" ?
            <button class="ui massive button" onClick={() => { this.filterQuestions(4) } }>Series 7</button>
            :
            <button class="ui massive button"onClick={() => { this.filterQuestions(5) } }>???</button>
            }
          </div>
          : ''
        }

        <div class="ui center aligned text container">{score}</div>
      </div>
    );
  }
}

export default QuestionList;

// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={ () => { broadScore() } }
//   />

// {setTimeout(() => console.log('coo'), 1000)}
