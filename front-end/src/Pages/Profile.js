import React, { Component } from 'react';

class Profile extends Component {
  state = {
    display: true,
    username: '',
    password: '',
    avatar: '',
    exam: '',
    test_date: ''
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
      .then(r => console.log(r))
      setTimeout(() => {window.location.replace('http://localhost:3001/login')}, 300)
    }

  render() {
    const form = this.state.display ? <div class="ui center aligned three column grid">
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

                      <div class="column">
                        <select class="ui dropdown" onChange={(e) => this.handleSelect(e.target.value)}>
                          <option>Select Test</option>
                          <option name="exam" value="SAT">SAT</option>
                          <option name="exam" value="Series 7">Series 7</option>
                        </select>
                      </div>

                      <div class="column">
                        <br></br>
                      </div>

                    </div>
                      <input class="ui submit button" type="submit" value="Save Changes" />
                      <div><br></br></div>
                    <div>
                      <button class="ui submit button" onClick={() => window.location.replace('http://localhost:3001')}>Homepage</button>
                    </div>
                  </div>

              </form>
            </div>
          </div>
          :
          ''

    return (
      localStorage.loggedIn ?
      <div>
      {form}
      </div>

      :
      <h1>Need to log in</h1>
    );
  }

}

export default Profile;
