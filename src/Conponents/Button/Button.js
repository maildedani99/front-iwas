import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, onClick, textColor, backgroundColor }) => {
  return (
    <div className="py-2 px-4  rounded-full cursor-pointer" style={{ color:textColor, backgroundColor:backgroundColor,}}>
      <input className="cursor-pointer" type="button" value={value} onClick={onClick} style={{fontWeight:500,  fontFamily:" 'Roboto', sans-serif"}}/>
    </div>
  );
};

Button.propTypes = {};

export default Button;
