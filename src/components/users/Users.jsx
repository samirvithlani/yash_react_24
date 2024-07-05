import React from "react";
import { UserList } from "./UserList";

export const Users = (props) => {
  //props object
  console.log("users props....", props);

  var userData = [
    {
      id: 1,
      name: "parth",
      age: 25,
      gender: "male",
      statue: true,
    },
    {
      id: 2,
      name: "kunal",
      age: 28,
      gender: "male",
      statue: false,
    },
    {
      id: 3,
      name: "jiya",
      age: 24,
      gender: "female",
      statue: true,
    },
  ];

  var app = "my app";

  const test = () => {
    alert("test");
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>USER COMPONENT - {props.title}</h1>
      <UserList
        users={userData}
        app={app}
        title={props.title}
        test={test}
      ></UserList>
    </div>
  );
};
