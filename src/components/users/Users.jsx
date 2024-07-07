import React, { useState } from "react";
import { UserList } from "./UserList";

export const Users = (props) => {
  //props object
  console.log("users props....", props);
  const [userData, setuserData] = useState([
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
  ]);

  var app = "my app";

  const deleteUser = (id) => {
    //alert("delete user...."+id);
    //userData.splice(id,);
    var users = userData.filter((user) => {
      //user.id =1 != 1 //false
      //user.id =2 != 1 //true
      //user.id =3 != 1 //true
      return user.id != id;
    });

    console.log("users....", users);
    setuserData(users);
  };

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
        deleteUser={deleteUser}
      ></UserList>
    </div>
  );
};
