import React from "react";
import PropTypes from "prop-types";
import EventCard from "../../Conponents/EventCard/EventCard";
import { events } from "../../EventDev/data";
import { useNavigate } from "react-router-dom";

const EventsList = ({ onEvent, setOnEvent }) => {
  const navigate = useNavigate();

  const eventHandleClick = () => {
    setOnEvent(true);
    navigate("/Imagenes");
  };

  return (
    <div className="flex flex-wrap flex-full 	">
      {events.map((event) => (
        <div className="cursor-pointer" onClick={eventHandleClick}>
          <EventCard key={event.id} event={event}  />
        </div>
      ))}
    </div>
  );
};

EventsList.propTypes = {};

export default EventsList;
