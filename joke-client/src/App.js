import React, { Component } from 'react';
import './styles/App.css';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dad's Gonna Joke</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
