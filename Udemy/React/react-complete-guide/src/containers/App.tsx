import React from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import Char from "../components/Char/Char";

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

      style.backgroundColor = "green";
    }

    //let classes = ["red", "bold"].join(" ");// "red bold"
    const classes: string[] = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (

      <div className="App">

        <h1>Hi, I'm a ReactApp.</h1>
        <p className={classes.join(" ")}>This is really nice</p>

        <button onClick={this.togglePersonsHandler} style={style}>Toggle People</button>

        {persons}
        {charList}

      </div>
    );
  }
}

export default App;
