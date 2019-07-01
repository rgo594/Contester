import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider'

class Question extends Component {

  colorBtn = (e) => {

    this.props.setClicked(true)

    const interval =
      this.props.question.answer === e.target.value ?
      this.props.setScore(e)
      :
      e.target.style.backgroundColor = 'red'

    const nextQuest = setTimeout(() => {
      (this.props.nextQuest(1))
    }, 1000)

    return interval
    return nextQuest
  }



  render() {
    const choice = (prop, val) => {
      return this.props.clicked ? <p><button key={prop} value={val}>{val.toUpperCase()}</button> {prop} </p> :
      <p><button key={prop} onClick={(e) => this.colorBtn(e)} value={val}>{val.toUpperCase()}</button> {prop} </p>
    }

    console.log(this.props.counter)

    return (
      <div>

        <div>
          <h4>{this.props.question.description}</h4>
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
