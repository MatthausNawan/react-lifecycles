import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDeriveredStateFromProps");
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[ Persons.js ] componentWillRecieveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("[ Persons.js ] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[ Persons.js ] componetDidUpdate");
    console.log(snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => {
      console.log("[Person.js] rendering...");
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
