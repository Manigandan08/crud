import React, { useEffect, useState } from "react";
import Regform from "./regForm";

import { getData, deleteData, addData } from "./api";

function App() {
  const [data, sedata] = useState([]);
  const [vale, setvale] = useState({
    Name: "",
    Price: "",
    Company: "",
    Test: "",
  });
  useEffect(() => {
    getprod();
  },[]);

  const getprod = async () => {
    const res = await getData();
    sedata(res.data);
  };

  const delprod = async (id) => {
    await deleteData(id);
    getprod();
  };

  const addprod = async (data) => {
    await addData(data);
    getprod();
  };

  const HandleformSubmit = (e) => {
    e.preventDefault();
    
    setvale({
      Name: "",
      Price: "",
      Company: "",
      Test: "",
    });
  };

  const HandleChange = (e) => {
    setvale({ ...vale, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
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
              value={vale.Name}
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
              value={vale.Price}
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
              value={vale.Company}
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
              value={vale.Test}
              onChange={HandleChange}
            />
          </div>
        </div>
        <button
          className="m-2 p-2 bg-blue-500"
          onClick={() => {
            addprod(vale);
          }}
        >
          Submit
        </button>
      </form>

      <div>
        <Regform dataV={data} delete={delprod} post={vale} />
      </div>
    </div>
  );
}

export default App;
