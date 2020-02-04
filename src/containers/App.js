import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Person 1", age: 29 },
      { id: "2", name: "Person 2", age: 29 },
      { id: "3", name: "Person 3", age: 31 },
      { id: "4", name: "Person 4", age: 33 },
      { id: "5", name: "Person 5", age: 12 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ App.js] shouldComponentUpdate");

    return true;
  }

  componentDidUpdate() {
    console.log("[App.js ] componentDidUppdate");
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  nameChangedHandler = (event, id) => {
    //findIndexInOrignalState
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //create an copy of person of state
    const person = { ...this.state.persons[personIndex] };

    //update the name
    person.name = event.target.value;

    //create a copy of persons state
    const persons = [...this.state.persons];

    //update person on copy of original persons state
    persons[personIndex] = person;

    //update the state
    this.setState({ persons: persons });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <button onClick={() => this.setState({ showCockpit: false })}>
          Toogle Cockcip
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLenght={this.state.persons.length}
            tooglePersons={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
