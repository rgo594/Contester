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

    clicked: false,

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

      const subjectCard = (a, b, c) => {
        return <div onClick={() => { this.filterQuestions(a) } } class="ui link card">
          <img src={b} class="ui image" />
          <div class="content">
             <div class="description">
                {c}
             </div>
           </div>
        </div>
      }

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
          <h4 style={{fontSize: '40px', margin: '50px'}}></h4>
          <div id="welcome" >
            <br></br>
            <br></br>
            <h1 class='ban-text'>Contester</h1>
          </div>
            <br></br>
            <div class="column"></div>
            {localStorage.exam == "SAT" ?
            <div class="ui left aligned grid">
              <div style={{margin: '0'}} class="row">
                {subjectCard(1, "https://publicdomainphotography.com/samples/NjEzZWZlOWNmZWYw/MjNlZmU5Y2ZlZjA=/Wooden-Block-ABC-Stack.jpg", "English 1")}
                <div class="column"><br></br></div>
                {subjectCard(2, "https://publicdomainphotography.com/samples/NjEzZWZlOWNmZWYw/MjNlZmU5Y2ZlZjA=/Wooden-Block-ABC-Stack.jpg", "English 2")}
                <div class="column"><br></br></div>
                {subjectCard(2, "https://publicdomainphotography.com/samples/NjEzZWZlOWNmZWYw/MjNlZmU5Y2ZlZjA=/Wooden-Block-ABC-Stack.jpg", "English 3")}
              </div>

              <div class="row">
                {subjectCard(3, "https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4MS85MDEvb3JpZ2luYWwvcGktZGF5LmpwZw==", "Math 1")}
                <div class="column"><br></br></div>
                {subjectCard(3, "https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4MS85MDEvb3JpZ2luYWwvcGktZGF5LmpwZw==", "Math 2")}
                <div class="column"><br></br></div>
                {subjectCard(3, "https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4MS85MDEvb3JpZ2luYWwvcGktZGF5LmpwZw==", "Math 3")}
              </div>


            </div>
            : localStorage.exam == "Series 7" ?
            <div class="ui left aligned grid">
            <div style={{margin: '0'}} class="row">
              {subjectCard(4, "https://finance.univie.ac.at/fileadmin/_processed_/csm_web_Banking-and-Finance_Hauptbi_672df5bcac.jpg", "Series 7")}
              <div class="column"><br></br></div>
              {subjectCard(4, "https://finance.univie.ac.at/fileadmin/_processed_/csm_web_Banking-and-Finance_Hauptbi_672df5bcac.jpg", "Series 7")}
              <div class="column"><br></br></div>
              {subjectCard(4, "https://finance.univie.ac.at/fileadmin/_processed_/csm_web_Banking-and-Finance_Hauptbi_672df5bcac.jpg", "Series 7")}
            </div>
            </div>
            :
            <div class="ui left aligned grid">
            <div class="row">
              {subjectCard(5, "https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F62525%252F2ffae0de-6d1f-436e-bb32-b55b797465af.jpg%252F950x534.jpg?signature=Rnsrdr6eOd2-YFiigSkjDHFmLe0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com", "Lord of the Rings")}
              <div class="column"><br></br></div>
              {subjectCard(5, "https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F62525%252F2ffae0de-6d1f-436e-bb32-b55b797465af.jpg%252F950x534.jpg?signature=Rnsrdr6eOd2-YFiigSkjDHFmLe0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com", "Math 2")}
              <div class="column"><br></br></div>
              {subjectCard(5, "https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F62525%252F2ffae0de-6d1f-436e-bb32-b55b797465af.jpg%252F950x534.jpg?signature=Rnsrdr6eOd2-YFiigSkjDHFmLe0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com", "Math 3")}
            </div>
            </div>
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

// <div class="three wide column">
//     <button class="ui massive green button" onClick={() => { this.filterQuestions(1) } }>English 1</button>
//       <div class="column"><br></br></div>
//     <button class="ui massive green button" onClick={() => { this.filterQuestions(2) } }>English 2</button>
// </div>

// <ActionCableConsumer
//   channel={{ channel: 'FeedChannel'}}
//   onReceived={ () => { broadScore() } }
//   />

// {setTimeout(() => console.log('coo'), 1000)}
