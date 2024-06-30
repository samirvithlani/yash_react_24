import React from "react";
//rfc
export default function Content() {
  var name = "Sachin";
  var age = 45;
  var isActive = true;

  var person = {
    name: "arjun",
    salary: 20000,
  };
  const divStyle = {
    backgroundColor: "lightblue",
    color: "red",
  
  }
  return (
    <div style={{backgroundColor:"GrayText"}}>
      {/* <h1>ONE TAG NEED TO RETURN COMPULSARY..</h1>
      <h1>ONLY ONE TAG NEED TO RETURN</h1>
      <h2>WHATEVER Written in return statment will display to browser..</h2> JSX */}
      <div style={divStyle}>
      {name}
      <h1>NAME = {name}</h1>
      <h2>Age ={age}</h2>
      <h2>ACTIVE = {isActive == true ? "Active" : "Not Active"}</h2>
      <h3>Name {person.name}</h3>
      </div>
    </div>
  );
}
