import React from "react";
import PropTypes from "prop-types";
import maria from "../../EventDev/maria.jpg";

const UserComents = (props) => {
  return (
    <div className="flex flex-col justify-center  w-24" >

    <div className=" flex flex-col 	p-1  m-1  rounded-md border  shadow-lg   self-center ">
      <img src={maria} alt="maria"  />
      </div>
      <div className="mt-1 text-xs text-center text-slate-500  ">
        <span>Maria Andrés Medina </span>
    </div>
    
    </div>
  );
};

UserComents.propTypes = {};

export default UserComents;
