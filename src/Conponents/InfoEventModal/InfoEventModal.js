import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import Button from '../Button';

const InfoEventModal = ({
  infoEventModalOpened,
  setInfoEventModalOpened,
  item,
}) => {
  const onCloseModal = () => setInfoEventModalOpened (false);
  return (
    <Modal open={infoEventModalOpened} onClose={onCloseModal}>
      <div className=" mt-8 flex flex-col items-center font-bold text-center	">

        <h2>{item.title}</h2>
        <p className="text-sm font-normal	mt-6">{item.description}</p>
        <div>
          {item.participants.map (item => <span>{item},</span>)}
              </div>
              <span>Comentarios(8)</span>

              <Button value="Ver Evento"
                  textColor="white"
          backgroundColor="#04a5a4"/>

      </div>
    </Modal>
  );
};

InfoEventModal.propTypes = {};

export default InfoEventModal;
