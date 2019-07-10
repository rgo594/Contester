import React, { Component } from 'react';
import HighScores from '../Components/HighScores.js'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class HighScoresPage extends Component {
  state = {
    coo: [],
    exam: localStorage.exam
  }

  highScores = () => {
    const filteredSubjects = this.props.scores.high_scores.filter(x => {
      return x.subject == this.state.exam
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
        <button class="ui huge button" onClick={() => window.location.replace('http://localhost:3001')}>Home</button>

        <div class="ui center aligned text container">
          <h1 style={{margin: '38px'}}>High Scores</h1>
          <div class="ui left aligned text container">
            <div class="ui large buttons">
              <button class="ui button" onClick={() => { this.setState({exam: "SAT"}) } }>SAT</button>
              <button class="ui button" onClick={() => { this.setState({exam: "Series 7"}) } }>Series 7</button>
            </div>
          </div>
        </div>

          <Table celled className='t-header'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className='cell-header' width={4}>Name</Table.HeaderCell>
                <Table.HeaderCell className='cell-header' width={4}>Correct %</Table.HeaderCell>
                <Table.HeaderCell className='cell-header' width={4}>Questions</Table.HeaderCell>
                <Table.HeaderCell className='cell-header' width={4}>Exam</Table.HeaderCell>
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
