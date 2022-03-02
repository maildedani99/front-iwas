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
      <div className=" mt-8 flex flex-col events-center font-bold text-center	">
        <h2>{event.title}</h2>
        <p className="text-sm font-normal	mt-6">{event.description}</p>
        <div>
          {event.participants.map((event) => (
            <span key={event.id}>{event},</span>
          ))}
        </div>
        <span>Comentarios(8)</span>
        <Button
          value="Ver Evento"
          textColor="white"
          backgroundColor="#04a5a4"
        />
      </div>
    </Modal>
  );
};

InfoEventModal.propTypes = {};

export default InfoEventModal;
