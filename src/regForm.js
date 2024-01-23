import React from "react";
import {Link} from "react-router-dom"

const Regform = (props) => {


  return (
    <div>
      {props.dataV.map((val,i) => {
        return (
          <div key={i} className="flex">
            <p className="mt-5 mr-5">{val.id}</p>
            <p className="mt-5 mr-5">{val.Name}</p>
            <p className="mt-5 mr-5">{val.Price}</p>
            <p className="mt-5  mr-5">{val.Company}</p>
            <p className="mt-5 mr-5">{val.Test}</p>
            <div >
            <Link to={"/Edit/"+val.id}>  <button className="mt-5 bg-blue-600 mr-1 px-1 rounded-sm" >edit</button></Link>
            {/* <Link to={"/Edit/"+val.id} state={{dat:val}}>  <button className="mt-5 bg-blue-600 mr-1 px-1 rounded-sm" >edit</button></Link> */}
              <button className="mt-5 ml-1 px-1 bg-red-500 rounded-sm" onClick={()=>{props.delete(val.id)}}>Remove</button>
            </div>
          </div>

        );
      })}
    </div>
  );
};

export default Regform;
