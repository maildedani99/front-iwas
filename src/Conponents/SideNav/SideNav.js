import React from "react";
import PropTypes from "prop-types";
import { sideNavStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { sideNavItems, sideNavItemsOnEvent } from "./constants";

const SideNav = ({ onEvent, setOnEvent }) => {
  const navigate = useNavigate();

  const navHandleClick = (item) => {
    console.log(item);
    if (item.label === "Eventos") {
      setOnEvent(false);
      navigate(item.label);
    } else {
      navigate(item.label);
    }
  };

  return (
    <div className="text-2l flex flex-col pt-16  text-slate-500 fixed w-2/12">
      {onEvent &&
        sideNavItemsOnEvent.map((item) => (
          <div
            key={item.id}
            className="py-4   hover:text-slate-700"
            style={sideNavStyles}
            onClick={() => navHandleClick(item)}
          >
            <span className="ml-4">{item.label}</span>
          </div>
        ))}
      {!onEvent &&
        sideNavItems.map((item) => (
          <div
            key={item.id}
            className="py-4   hover:text-slate-700"
            style={sideNavStyles}
            onClick={() => navHandleClick(item)}
          >
            <span className="ml-4">{item.label}</span>
          </div>
        ))}
    </div>
  );
};

SideNav.propTypes = {};

export default SideNav;
