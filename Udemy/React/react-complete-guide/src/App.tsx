import React from 'react';
import './App.css';
import Person from "./Person/Person";

export default class App extends React.Component {

  public state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 29
      },
      {
        name: "BLAH",
        age: 0
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp.</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        {/* <Person name="Manu" age="29">
          My Hobbies: racing
        </Person>
        <Person name="BLAH" age="0"></Person> */}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Does this work?")
    // );
  }
}
