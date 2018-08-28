import React from "react";
import "./App.css";
import Person from "./Person/Person";

export default class App extends React.Component {

  public state = {
    persons: [
      { name: "Max", age: 28, id: 123 },
      { name: "Manu", age: 29, id: 456 },
      { name: "BLAH", age: 0, id: 789 }
    ],
    showPersons: false
  };

  private nameChangedHandler = (event: any, id: number): void => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const pCopy = [...this.state.persons];
    pCopy[personIndex] = person;

    this.setState(
      {
        persons: pCopy
      }
    );
  };

  private togglePersonsHandler = (): void => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  private deletePersonHandler = (personIndex: number): void => {
    //const persons = this.state.persons.slice();//creates a copy
    const persons = [...this.state.persons];// es6 way to create a copy
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

          {this.state.persons.map((person: any, index: number) => {
            return <Person
              clickThingy={(): void => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}// helps react become more efficient - otherwise it will re-render the entire list
              changeMei={(event: any): void => this.nameChangedHandler(event, person.id)}
            ></Person>
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
