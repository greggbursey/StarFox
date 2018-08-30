import React from "react";
import "./App.css";
import Char from "../components/Char/Char";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {

  public state = {
    persons: [
      { name: "Max", age: 28, id: 123 },
      { name: "Manu", age: 29, id: 456 },
      { name: "BLAH", age: 0, id: 789 }
    ],
    showPersons: false,
    userInput: ""
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

  private deleteCharHandler = (index: number): void => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);

    const updatedText = text.join("");
    this.setState({
      userInput: updatedText
    });
  };

  render(): any {

    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char character={ch} key={index} clicked={(): void => this.deleteCharHandler(index)}></Char>;
    });

    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>

      );

      style.backgroundColor = "green";
    }

    return (

      <div className="App">
        <Cockpit>
          {persons}
          {charList}
        </Cockpit>
      </div>
    );
  }
}

export default App;
