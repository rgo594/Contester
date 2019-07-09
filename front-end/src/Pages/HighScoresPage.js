import React, { Component } from 'react';
import HighScores from '../Components/HighScores.js'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class HighScoresPage extends Component {
  state = {
    coo: []
  }

  highScores = () => {
    const filteredSubjects = this.props.scores.high_scores.filter(x => {
      return x.subject == localStorage.exam
    })

    const filtered = filteredSubjects.filter(x => {
      return x.times_taken >= 10
    })


    const sorted = filtered.sort((a, b) =>
      (a.score / a.times_taken < b.score / b.times_taken) ? 1 : -1).slice(0,5)

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
      <div>
        <div class="ui center aligned text container">
        <button class="ui button" onClick={() => window.location.replace('http://localhost:3001')}>Home</button>
          <h1>High Scores</h1>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={4}>Name</Table.HeaderCell>
                <Table.HeaderCell width={4}>Correct %</Table.HeaderCell>
                <Table.HeaderCell width={4}>Questions Answered</Table.HeaderCell>
                <Table.HeaderCell width={4}>Exam</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          {this.highScores()}

            <h4 style={{color: 'grey'}}>Must have answered at least 10 questions to make it on the high scores</h4>
        </div>
      </div>
    );
  }

}

export default HighScoresPage;

// <h1>High Scores</h1>
//   <thead class="">
//     <tr class="">
//       <th class="">Header</th>
//       <th class="">Header</th>
//       <th class="">Header</th>
//     </tr>
//   </thead>

// {highScores}
