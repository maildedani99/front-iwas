import React, { useState } from "react";
import PropTypes from "prop-types";
import pic from "../../EventDev/foto1.jpeg";
import InfoEventModal from "../InfoEventModal";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event, setOnEvent }) => {
  const [infoEventModalOpened, setInfoEventModalOpened] = useState(false);
  const navigate = useNavigate();

  const eventHandleClick = () => {
    setOnEvent(true);
    navigate("/Imagenes");
  };

  return (
    <div className="m-8 rounded-md border p-2 shadow-lg text-slate-500">
      <div onClick={eventHandleClick}>
        <img src={pic} alt="pic" />
        <div className="mt-2">
          <h1 className="text-lg font-bold">{event.title}</h1>
          <div className="flex flex-row justify-between	"></div>
          <span className="text-sm "> {event.date}</span>
        </div>
      </div>
      <input
        type="button "
        className="text-sm cursor-pointer "
        value={"+ Info"}
        style={{ color: "#04A5A4" }}
        onClick={() => setInfoEventModalOpened(true)}
      />
      <InfoEventModal
        infoEventModalOpened={infoEventModalOpened}
        setInfoEventModalOpened={setInfoEventModalOpened}
        event={event}
      />
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
};

export default EventCard;
