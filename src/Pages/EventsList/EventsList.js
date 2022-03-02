import React from "react";
import PropTypes from "prop-types";
import EventCard from "../../Conponents/EventCard/EventCard";
import { events } from "../../EventDev/data";
import { useNavigate } from "react-router-dom";

const EventsList = ({ setOnEvent }) => {
  

  return (
    <div className="flex flex-wrap flex-full pt-16 justify-center	">
      {events.map((event) => (
        <div key={event.id} className="cursor-pointer" >
          <EventCard  event={event} setOnEvent={setOnEvent}  />
        </div>
      ))}
    </div>
  );
};

EventsList.propTypes = {
    setOnEvent: PropTypes.func
};

export default EventsList;
