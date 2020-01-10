import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => (props.showPersons ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.showPersons ? "salmon" : "lightgreen")};
    color: black;
  }
`;
const cockpit = props => {
  let classes = [];

  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <StyledButton
        showPersons={props.showPersons}
        onClick={props.tooglePersons}
      >
        Toggle Persons
      </StyledButton>
      <p className={classes.join(" ")}>This is a really working!</p>
    </div>
  );
};

export default cockpit;
