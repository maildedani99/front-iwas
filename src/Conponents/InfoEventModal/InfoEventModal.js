import React from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import Button from "../Button";

const InfoEventModal = ({
  infoEventModalOpened,
  setInfoEventModalOpened,
  event,
}) => {
  const onCloseModal = () => setInfoEventModalOpened(false);
  return (
    <Modal open={infoEventModalOpened} onClose={onCloseModal}>
      <div className=" mt-8 flex flex-col events-center font-bold text-center text-xl	 w-96	text-slate-700		">
        <h1>{event.title}</h1>
        <p className="text-sm font-normal	mt-6 text-slate-500">{event.description}</p>
        <div className="text-sm font-normal	mt-6">
          <p className=" mt-4 mb-2 text-lg flex flex-col events-center font-bold text-center	">Participantes:</p>          
          {event.participants.map((event) => (
            <span key={event.id}>{event}, </span>
          ))}
        </div>
        <span className=" mt-8 mb-6  flex flex-col events-center font-bold text-center text-lg">Comentarios (8)</span>
          
        <div className="my-6 w-3/4	self-center	" >

        <Button
          value="Ver Evento"
          textColor="white"
          backgroundColor="#04a5a4"
          />
          </div>
      </div>
    </Modal>
  );
};

InfoEventModal.propTypes = {};

export default InfoEventModal;
