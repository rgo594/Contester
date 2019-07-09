import React, { Component } from 'react';
import HighScores from '../Components/HighScores.js'

class HighScoresPage extends Component {
  state = {
    coo: []
  }

  mur = () => {
    const filtered = this.props.scores.high_scores.filter(x => {
      return x.times_taken >= 10
    })


    const sorted = filtered.sort((a, b) =>
      (a.score / a.times_taken < b.score / b.times_taken) ? 1 : -1).slice(0,3)

    // this.props.scores.high_scores.reverse()

    const highScores = sorted.map(n => {
      return <HighScores score={n} />
    })
    return highScores
  }
  // componentDidMount(){
  //
  // }

  render() {
    const x = this.props.scores.high_scores.reverse()
    console.log(this.props.scores.high_scores.filter(x => {
      return x.times_taken > 5
    }))




    return (
      <div class="ui center aligned text container">
        <button class="ui button" onClick={() => window.location.replace('http://localhost:3001')}>Home</button>
        <button class="ui button" onClick={() => this.setState({coo: [...this.state.coo, this.props.scores.high_scores]})}>Test</button>
        <h1>High Scores</h1>
        {this.mur()}
      </div>
    );
  }

}

export default HighScoresPage;

// {highScores}
