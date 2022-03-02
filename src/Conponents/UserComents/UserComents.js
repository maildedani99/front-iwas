import React from "react";
import PropTypes from "prop-types";
import maria from "../../EventDev/maria.jpg";

const UserComents = (props) => {
  return (
    <div className=" flex flex-col text-xs	p-1 m-8 rounded-md border  shadow-lg text-slate-500 w-20 ">
      <img src={maria} alt="maria"  />
      <div className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap ">
        <span>Maria Andrés Medina</span>
      </div>
    </div>
  );
};

UserComents.propTypes = {};

export default UserComents;
