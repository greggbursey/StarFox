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
    ],
    showPersons: false
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
          { name: "GAAARRRHG", age: 28 },
          { name: event.target.value, age: 29 },
          { name: "BLAH", age: 100 }
        ]
      }
    );
  }

  private togglePersonsHandler = (): void => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render(): any {

    const style = {
      backgroundColor: "#fff",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}></Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a ReactApp.</h1>

        <button onClick={this.togglePersonsHandler} style={style}>Switch Name</button>

        {persons}

      </div>
    );
  }
}
