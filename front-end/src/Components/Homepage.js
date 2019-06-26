import React from 'react';


class Homepage extends React.Component {

  render(){

    return (
      localStorage.token ?
        <h1>Logged In</h1>
        : <h1>Please Log In</h1>
      );

    }
  }


export default Homepage;
