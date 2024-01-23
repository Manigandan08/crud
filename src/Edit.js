import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { editData,getDataid} from "./api";
import {Link} from "react-router-dom"


const Edit = () => {
  const [data, sedata] = useState({
    Name: "",
    Price: "",
    Company: "",
    Test: "",
  });
  
  const {id} = useParams();


  useEffect(() => {
    getprodid(id);
  },[id]);

  const getprodid = async (id) => {
    const res = await getDataid(id);
    sedata(res.data);
  };

  const upProd = async (data) => {
    console.log(data);
    await editData(id, data);
  };
  const HandleformSubmit = (e) => {
    e.preventDefault();
  };

  const HandleChange = (e) => {
    sedata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={HandleformSubmit}>
        <div className="w-80">
          <h1 className="text-blue-500 font-bold text-2xl">
            Registration form
          </h1>

          <div className="flex  justify-between">
            <label className="text-right m-2 ">Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="m-2 outline  outline-1"
              value={data.Name}
              onChange={HandleChange}
            />
          </div>
          <div className="flex  justify-between">
            <label className="text-right m-2  ">Price</label>
            <input
              type="text"
              name="Price"
              placeholder="Price"
              className="m-2  outline  outline-1 "
              value={data.Price}
               onChange={HandleChange}
            />
          </div>

          <div className="flex  justify-between">
            <label className="text-right m-2  ">Company</label>
            <input
              type="text"
              name="Company"
              placeholder="Company"
              className="m-2 outline outline-1 "
              value={data.Company}
               onChange={HandleChange}
            />
          </div>
          <div className="flex  justify-between">
            <label className="text-right m-2  ">Test</label>
            <input
              type="text"
              name="Test"
              placeholder="Test"
              className="m-2 outline outline-1 "
              value={data.Test}
              onChange={HandleChange}
            />
          </div>
        </div>
      <Link to="/"><button
          className="m-2 p-2 bg-blue-500"
          onClick={() => {
            upProd(data);
          }}
        >
          Update
        </button></Link>  
      </form>
    </div>
  );
};

export default Edit;
