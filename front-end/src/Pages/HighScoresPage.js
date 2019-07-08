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
      return <HighScores username={n.username}/>
    })
    console.log(this.state.allScores.high_scores)

    return (
      <div>High Scores
        {highScores}
      </div>
    );
  }

}

export default HighScoresPage;
