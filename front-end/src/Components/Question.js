import React, { Component } from 'react';

class Question extends Component {


  colorBtn = (e) => {
    const interval =
      this.props.question.answer === e.target.value ?
      this.props.setScore() :
      this.props.nextQuest(1)

    const nextQuest = this.props.nextQuest(1)

    return interval
    return nextQuest
  }



  render() {
    // const interval = setInterval(() => {
    //   return this.state.counter--;
    //   }, 1000)
    console.log(this.props.counter)

    return (
      <div>

        <div>
        <h4>{this.props.question.description}</h4>
          <p><button onClick={(e) => this.colorBtn(e)} value="a">A</button> {this.props.question.a} </p>
          <p><button onClick={(e) => this.colorBtn(e)} value="b">B</button> {this.props.question.b} </p>
          <p><button onClick={(e) => this.colorBtn(e)} value="c">C</button> {this.props.question.c} </p>
          <p><button onClick={(e) => this.colorBtn(e)} value="d">D</button> {this.props.question.d} </p>
        </div>
      </div>

    );
  }

}

  //{setTimeout(() => { this.props.nextQuest(1) }, miliTimer)}

export default Question;
