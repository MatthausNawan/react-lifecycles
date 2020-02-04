import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log("[ Cockipt.js] useEffect ");
    setTimeout(() => {
      alert("Save data to clound!");
    }, 1000);

    return () => {
      console.log("[Cockpit.js ] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => {
      console.log("[Cockipt.js] cleanup work in 2nd useEffect");
    };
  });

  let classes = [];

  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
