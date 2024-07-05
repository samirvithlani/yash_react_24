import React from "react";

export const UserList = (props) => {
  console.log("user list props....", props);
  return (
    <div>
      <h3 style={{ color: "blue" }}>USER LIST</h3>
      <table border="1" align="center" style={{ backgroundColor: "GrayText" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>
                  {user.statue ? (
                    <span style={{ color: "green" }}>Active</span>
                  ) : (
                    <span style={{ color: "red" }}>Inactive</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>{props.test()}}>test..</button>
    </div>
  );
};
