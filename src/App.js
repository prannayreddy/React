import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state= {
    persons: [
      {age:20},
      {age:55}
    ]
  }

  switchAgeHandler =() => {
    this.setState({
      persons: [
        {age:69},
        {age:55}
      ]
    });
  }
  render() {
    return (
      <div className="App">
       <h1> Helllo</h1>
       <button onClick={this.switchAgeHandler}>Change Age</button>
       <Person age={this.state.persons[0].age} > Children Props </Person>
       <Person age={this.state.persons[1].age} ></Person>
      </div>
    );
  }
}

export default App;
