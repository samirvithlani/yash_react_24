import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const UpdateUser = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      // return ({
      //     name:res.data.data.name,
      //     email:res.data.data.email,
      //     age:res.data.data.age,
      //     isActive:res.data.data.isActive

      // });
      return res.data.data;
    },
  });
  const submitHandler = async (data) => {
    console.log(data);
    //exclude the id from the data
    delete data._id;
    console.log("after delete", data);
    try {
      const res = await axios.put(
        "https://node5.onrender.com/user/user/" + id,
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
};
