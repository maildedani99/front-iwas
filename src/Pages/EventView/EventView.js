import React, { useState } from "react";
import PropTypes from "prop-types";
import SideNav from "../../Conponents/SideNav/SideNav";
import PicsView from "../PicsView/PicsView";
import ComentsView from "../ComentsView/ComentsView";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParticipantsView from "../ParticipantsView/ParticipantsView";
import EventsList from "../EventsList/EventsList";

const EventView = (props) => {

  const [eventId, setEventId] = useState(null)
  const [onEvent, setOnEvent] = useState(false)

  return (
    <Router>
      <div
        className="flex flex-row w-full min-h-screen"
        style={{ marginTop: "90px" }}
      >
        <div className="w-2/12">
          <SideNav  onEvent={onEvent} setOnEvent={setOnEvent}/>
        </div>
        <div className="w-10/12 flex flex-col flex-1">
          
          <Routes>
          <Route exact path="/" element={<EventsList onEvent={onEvent} setOnEvent={setOnEvent} />} />
          <Route exact path="/Eventos" element={<EventsList onEvent={onEvent} setOnEvent={setOnEvent} />} />
            <Route exact path="/Imagenes" element={<PicsView/>}/>
            <Route exact path="/Participantes" element={<ParticipantsView/>}/>
            <Route exact path="/Comentarios" element={<ComentsView/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

EventView.propTypes = {};

export default EventView;
