import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomeLoader } from "../components/CustomeLoader";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show, setShow] = useState(false);

  const getApiCall = async () => {
    //get --> {headers:content-type:application/json}
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    console.log(res.data.message);
    console.log(res.data.data);
    setusers(res.data.data);
    setisLoading(false);
  };

  const deleteUser = async (id) => {
    setisLoading(true);
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    // console.log(res);
    if (res.status === 204) {
      console.log("User Deleted Successfully");
      setisLoading(false);
      //alert("User Deleted Successfully")
      toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      getApiCall();
    }
  };

  useEffect(() => {
    getApiCall();
  }, []);

  const [user, setuser] = useState({})
  const handleShow = async(id) => {

    const res = await axios.get("https://node5.onrender.com/user/user/"+id);
    setuser(res.data.data);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && <CustomeLoader />}
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button onClick={()=>{
                    handleShow(user._id)
                  }} className="btn btn-info">Detail</button>
                  <Link to ={`/updateuser/${user?._id}`} className="btn btn-warning">Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{user?.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <button onClick={()=>{getApiCall()}}>Get API Call</button> */}
    </div>
  );
};
