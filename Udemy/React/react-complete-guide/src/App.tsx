import React from "react";
import "./App.css";
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

  private switchNameHandler = (): void => {
    alert("BLAH");
  }

  render(): any {
    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}
