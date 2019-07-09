import React, { Component } from 'react';

class HighScores extends Component {
  state = {
    correct: [this.props.score.score]
  }

  // componentDidMount(){
  //   this.setState( { correct: [...this.state.correct, this.props.score.score] })
  // }

  render() {
    console.log(this.props.coo)
    const sc = this.props.score

    return (
      <div class="ui center aligned text container">
        <br></br>
        <div>
        <h2>{sc.username}</h2>
        <div></div>
        <h3>{(sc.score / sc.times_taken) * 100}% correct</h3>
        <h3>{sc.times_taken} questions</h3>
        </div>
      </div>
    );
  }

}

export default HighScores;
