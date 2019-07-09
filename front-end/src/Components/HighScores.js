import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

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
      <div>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={4}>{sc.username}</Table.Cell>
            <Table.Cell width={4}>{Math.round((sc.score / sc.times_taken) * 100)}%</Table.Cell>
            <Table.Cell width={4}>{sc.times_taken}</Table.Cell>
            <Table.Cell width={4}>{sc.subject}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    );
  }

}
// <table class="ui celled table">
//   <tbody class="">
//     <tr class="width thirteen">
//       <td class="">{sc.username}</td>
//       <td class="">{Math.round((sc.score / sc.times_taken) * 100)}% correct</td>
//       <td class="">{sc.times_taken}</td>
//       <td class="">{sc.subject}</td>
//     </tr>
//   </tbody>
// </table>

export default HighScores;
