import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../Conponents/UserCard/UserCard";

const ParticipantsView = (props) => {
  return (
    <div className="flex flex-wrap flex-full pt-16 justify-center">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
  );
};

ParticipantsView.propTypes = {};

export default ParticipantsView;
