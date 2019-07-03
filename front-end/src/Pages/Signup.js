import React from 'react';

class Signup extends React.Component{
  state= {
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

handleSignup = (event) => {
  event.preventDefault()
  console.log(this.state.username)
  console.log(this.state.password)
  fetch('http://localhost:3000/users', {
    method: 'POST',
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

  render(){
    console.log(this.state)
    return(
      <div class="ui center aligned three column grid">

        <div class="column">
          <h1 class="ui purple image header">Signup</h1>
          <form class="ui center aligned form" onSubmit={this.handleSignup}>
              <div class="ui stacked segment">
                <div class="ui huge left icon input" >
                  <i class="user icon"> </i>
                  <input type="text" name="username" onChange={this.handleChange} placeholder="username"/>
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
                <input class="ui submit button" type="submit" value="Signup" />
                <button class="ui submit button" onClick={() => window.location.replace('http://localhost:3001/login')}>Login</button>
              </div>

          </form>
        </div>
      </div>
    )
  }
}

export default Signup



      // <div class="ui center aligned three column grid">
      // <div>

      // <div class="column">
      //   <br></br>
      // </div>
      // <h1 class="ui purple image header">Signup</h1>
      //   <form class="ui center aligned form" onSubmit={this.handleSignup}>
      //     <div class="column">
      //       <input type="text" name="username" onChange={this.handleChange} />
      //     </div>
      //     <div class="column">
      //       <br></br>
      //     </div>
      //     <div class="column">
      //       <input type="password" name="password" onChange={this.handleChange} />
      //     </div>
      //     <select  onChange={(e) => this.handleSelect(e.target.value)}>
      //       <option>Select Test</option>
      //       <option name="exam" value="SAT">SAT</option>
      //       <option name="exam" value="Series 7">Series 7</option>
      //     </select>
      //
      //   <input type="submit" value="Signup" />
      //   </form>
      //     <button onClick={() => window.location.replace('http://localhost:3001/login')}>Login</button>
      //   </div>
      // </div>
