import React from "react";

export const MapDemo = () => {
  const users = ["ram", "shyam", "hari", "geeta"];
  const emps = [
    {
      id: 1,
      name: "amit",
      age: 23,
    },
    {
      id: 2,
      name: "sumit",
      age: 26,
    },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user}</li>;
        })}
      </ul>
      <ul>
        {emps.map((emp) => {
          return (
            <li key={emp.id}>
              <span style={{ color: emp.age > 25 ? "red" : "green" }}>
                Name : {emp.name} Age : {emp.age}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
