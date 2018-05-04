import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Gregg', age: 28},
      {name: 'Gregg2', age: 283},
      {name: 'Gregg3', age: 284},
    ]
  }

  switchNameHandler = (newName) => {
    //alert("Was clicked");
    //this.state.persons[0].name = "ARNOLD!";//--react will not render changes directly on the state - DON't DO THIS!
    this.setState(
      {
        persons: [
          {name: newName, age: 28},
          {name: 'ARNOLD2', age: 283},
          {name: 'Gregg4', age: 284},
        ]
      }
    );
  }

  render() {
    // JSX - not html (even though it looks like it)
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is working great!</p>
        <button onClick={() => this.switchNameHandler("BLAHHA")}>Switch name</button>
        
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "BOoohooo")}/>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>ASDF</Person>
        <Person />
      </div>
    );
    // JSX gets compiled to code like this
    //return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "REACT APP!"));
  }
}

export default App;
