import React, { Component } from 'react';

class Question extends Component {

  render() {
    console.log(this.state)
    console.log(this.props.question)
    const coo = (e) => this.props.question.answer === e.target.value ?
      e.target.style.backgroundColor = 'green' :
      e.target.style.backgroundColor = 'red'

    return (
      <div>
        <h4>{this.props.question.description}</h4>
          <p><button onClick={() => this.props.nextQuest(1)} value="a">A</button> {this.props.question.a} </p>
          <p><button onClick={(e) => coo(e)} value="b">B</button> {this.props.question.b} </p>
          <p><button onClick={(e) => coo(e)} value="c">C</button> {this.props.question.c} </p>
          <p><button onClick={(e) => coo(e)} value="d">D</button> {this.props.question.d} </p>
      </div>

    );
  }

}

export default Question;
