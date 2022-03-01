import React, {useState} from 'react';
import PropTypes from 'prop-types';
import pic from '../../EventDev/foto1.jpeg';
import Button from '../Button';
import InfoEventModal from '../InfoEventModal';

const EventCard = ({event}) => {
  const [infoEventModalOpened, setInfoEventModalOpened] = useState (false);

  console.log(event)

  return (
    <div className="m-8 rounded-md border p-2 shadow-lg text-slate-500">

      <img src={pic} alt="pic" />
      <div className="mt-2">
        <h1 className="text-lg font-bold">{event.title}</h1>
        <div className="flex flex-row justify-between	">
          <span className="text-sm "> {event.date}</span>
          <input
            type="button"
            className="text-sm"
            value={'+ Info'}
            style={{color: '#04A5A4'}}
            onClick={() => setInfoEventModalOpened (true)}
          />
        </div>
      </div>
      {/* <InfoEventModal
        infoEventModalOpened={infoEventModalOpened}
        setInfoEventModalOpened={setInfoEventModalOpened}
             event={event}
              
      /> */}
    </div>
  );
};

EventCard.propTypes = {};

export default EventCard;
