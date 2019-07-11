import React, { Component } from 'react';
import DropdownComp from '../Components/DropdownComp'
import { Card } from 'semantic-ui-react'

class Profile extends Component {
  state = {
    display: false,
    username: localStorage.username,
    password: '',
    avatar: '',
    exam: '',
    test_date: '',
    score: '',
    times_taken: ''
  }

  componentDidMount(){
    fetch(`http://localhost:3000/high_scores/${localStorage.user_id}`)
      .then(n => n.json())
      .then(n => this.setState({
        score: n.high_score.score,
        times_taken: n.high_score.times_taken
      }))
  }

  handleSelect = (name) => {
    this.setState({
      exam: name
    })
  }

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEdit = (event) => {
    event.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    this.state.password === '' ? alert('Cant leave password blank') :
    fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
          exam: this.state.exam
        }
      })
    })
      .then(r => r.json())
      .then(r =>
        fetch(`http://localhost:3000/high_scores/${localStorage.user_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            high_score: {
              username: this.state.username,
              subject: this.state.exam
            }
          })
        })
      )
      localStorage.clear()
      setTimeout(() => {window.location.replace('http://localhost:3001/login')}, 300)
    }

  render() {
    console.log(this.state.exam)
    const form = this.state.display ? <div style={{marginTop: '50px'}} class="ui center aligned two column grid">
            <div class="column">

              <h1 class="ui purple image header">Edit Profile</h1>
              <form class="ui center aligned form" onSubmit={this.handleEdit}>
                  <div class="ui stacked segment">
                    <div class="ui huge left icon input" >
                      <i class="user icon"> </i>
                      <input type="text" name="username" onChange={this.handleChange} placeholder={localStorage.username}/>
                    </div>

                    <div class="column">
                      <br></br>
                    </div>

                    <div class="column">
                    <div class="ui huge left icon input" >
                      <i class="lock icon"> </i>
                      <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                    </div>

                    <div class="column">
                      <br></br>
                    </div>

                      <DropdownComp handleSelect={(e) => this.handleSelect(e)}/>

                      <div class="column">
                        <br></br>
                      </div>
                      </div>
                      <div>
                        <button class="ui submit button" onClick={() => this.setState({display: !this.state.display})}>Hide Form</button>
                        <input class="ui submit button" type="submit" value="Save Changes" />
                        <p style={{color: 'grey'}}>(will log you out)</p>
                      </div>
                      <div>
                    </div>
                      <div><br></br></div>
                    </div>
                </form>

            </div>
          </div>
          :
          <div id='mur'>
            <div id='banner'>
              <button class="ui purple huge submit button" onClick={() => this.setState({display: !this.state.display})}>Edit Profile?</button>
              <button class="ui purple huge submit button" onClick={() => window.location.replace('http://localhost:3001')}>Homepage</button>
            </div>

            <table id='coo' class="ui center aligned celled table">
              <tbody>
                <tr>
                  <td class='pro-cell' data-label="Name">{localStorage.username}</td>
                </tr>
                <tr>
                  <td class='pro-cell'>{this.state.score}/{this.state.times_taken} Questions</td>
                </tr>
                <tr>
                  <td data-label="Job">{Math.round((this.state.score / this.state.times_taken) * 100)}% Correct</td>
                </tr>
              </tbody>
            </table>

          </div>

    return (
      localStorage.loggedIn ?
      <div id='mur' class="ui center aligned container">
        {form}
      </div>
      :
      <h1>Need to log in</h1>
    );
  }

}

// <div class="column">
//   <select class="ui dropdown" onChange={(e) => this.handleSelect(e.target.value)}>
//     <option>Select Test</option>
//     <option name="exam" value="SAT">SAT</option>
//     <option name="exam" value="Series 7">Series 7</option>
//   </select>
// </div>

export default Profile;
