import React, { Component } from 'react';
import Nav from './components/navBar/Navbar'
import C from './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
      <div className={C.App}>
        <h1>Performance Review</h1>
      </div>
      </div>

    );
  }
}

export default App;
