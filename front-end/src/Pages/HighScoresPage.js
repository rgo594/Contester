import React, { Component } from 'react';
import HighScores from '../Components/HighScores.js'

class HighScoresPage extends Component {
  state = {
    allScores: {high_scores: []}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/high_scores`)
       .then(n => n.json())
       .then(n => this.setState({allScores: n})
       )
  }

  render() {
    const highScores = this.state.allScores.high_scores.map(n => {
      return <HighScores score={n}/>
    })
    console.log(this.state.allScores.high_scores)

    return (
      <div class="ui center aligned text container">
      <button class="ui button" onClick={() => window.location.replace('http://localhost:3001')}>Home</button>
        <h1>High Scores</h1>
        {highScores}
      </div>
    );
  }

}

export default HighScoresPage;
