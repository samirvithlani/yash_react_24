import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiDemo1 = () => {

    const [users, setusers] = useState([])
  const getApiCall = async () => {
    //get --> {headers:content-type:application/json}
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    console.log(res.data.message);
    console.log(res.data.data);
    setusers(res.data.data)

  };

  useEffect(() => {
    
    getApiCall()
    
  }, [])
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>API Demo 1</h1>
        <h1>Users</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>    
                    <th>STATUS</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive?"Active":"Not Active"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      {/* <button onClick={()=>{getApiCall()}}>Get API Call</button> */}
    </div>
  );
};
