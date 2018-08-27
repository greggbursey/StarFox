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

  private switchNameHandler = (newName: string): void => {
    //this.state.persons[0].name = "GArgoyal";// don't do this!
    this.setState(
      {
        persons: [
          {
            name: newName,
            age: 28
          },
          {
            name: "Manu",
            age: 29
          },
          {
            name: "BLAH",
            age: 100
          }
        ]
      }
    );
  };

  private nameChangedHandler = (event: any): void => {
    this.setState(
      {
        persons: [
          {
            name: "GAAARRRHG",
            age: 28
          },
          {
            name: event.target.value,
            age: 29
          },
          {
            name: "BLAH",
            age: 100
          }
        ]
      }
    );
  }



  render(): any {

    const style = {
      backgroundColor: "#fff",
      font: "inherit",
      border: "1px solid blue",
      cursor: "pointer",
      padding: "8px"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp.</h1>
        <button onClick={this.switchNameHandler.bind(this, "GARGG")} style={style}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} clickThingy={this.switchNameHandler.bind(this, "Hair E")}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changeMei={this.nameChangedHandler}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}
