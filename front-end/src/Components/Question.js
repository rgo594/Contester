import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Segment } from 'semantic-ui-react'

class Question extends Component {
  state = {
    bgc: 'green'
  }

  incorrect = (e) => {
    let answer = document.querySelector(`#${this.props.question.answer}`)
    let correct = answer.style.backgroundColor = 'green'
    let incorrect = e.target.style.backgroundColor = 'red'

    return correct
    return incorrect
  }

  timeout = (prop, val) => {
    let answer = document.querySelector(`#${this.props.question.answer}`)
    let correct = answer.style.backgroundColor = 'green'


    return <p><button class="ui fluid huge toggle button" key={prop} value={val}>{prop}</button></p>
    return correct
  }

  colorBtn = (e) => {

    this.props.setClicked(true)

    const interval =
      this.props.question.answer === e.target.value ?
      this.props.setScore(e)
      :
      this.incorrect(e)

    const nextQuest = setTimeout(() => {
      (this.props.nextQuest(1))
    }, 1000)

    return interval
    return nextQuest
  }

  render() {

    const choice = (prop, val) => {
      return this.props.clicked ? <p><button class="ui fluid huge toggle button" key={prop} value={val}>{prop}</button></p>
      :
      this.props.counter === 0 ? this.timeout(prop, val)
      :
      <p><button class="ui fluid huge toggle button" key={prop} id={val} onClick={(e) => this.colorBtn(e)} value={val}>{prop}</button></p>
    }

    return (
      <div>
        <div>
          <h4 style={{fontSize: 20}} class="ui fluid segment">{this.props.question.description}</h4>
            {choice(this.props.question.a, "a")}
            {choice(this.props.question.b, "b")}
            {choice(this.props.question.c, "c")}
            {choice(this.props.question.d, "d")}
        </div>
      </div>
    );
  }

}


export default Question;
