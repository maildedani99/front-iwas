import React, {useState} from 'react';
import PropTypes from 'prop-types';
import pic from '../../EventDev/foto1.jpeg';
import InfoEventModal from '../InfoEventModal';
import Button from '../Button';

const EventCard = ({item}) => {
  const [infoEventModalOpened, setInfoEventModalOpened] = useState (false);

  return (
    <div className="m-8 rounded-md border p-2 shadow-lg text-slate-500">

      <img src={pic} alt="pic" />
      <div className="mt-2">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <div className="flex flex-row justify-between	">
          <span className="text-sm "> {item.date}</span>
          <input
            type="button"
            className="text-sm"
            value={'+ Info'}
            style={{color: '#04A5A4'}}
            onClick={() => setInfoEventModalOpened (true)}
          />
        </div>
      </div>
      <InfoEventModal
        infoEventModalOpened={infoEventModalOpened}
        setInfoEventModalOpened={setInfoEventModalOpened}
             item={item}
              
      />
    </div>
  );
};

EventCard.propTypes = {};

export default EventCard;
