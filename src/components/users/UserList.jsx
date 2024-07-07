import React from "react";

export const UserList = (props) => {
  console.log("user list props....", props);
  return (
    <div>
      <h3 style={{ color: "blue" }}>USER LIST</h3>
      <table border="1" align="center" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>STATUS</th>
            <th>ACTION</th>
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
                <td>
                  <button onClick={()=>{props.deleteUser(user.id)}} className="btn btn-delete">DELETE</button>
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
