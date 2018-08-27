import React from 'react';
import './App.css';
import Person from "./Person/Person";

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp.</h1>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29">
          My Hobbies: racing
        </Person>
        <Person name="BLAH" age="0"></Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Does this work?")
    // );
  }
}
