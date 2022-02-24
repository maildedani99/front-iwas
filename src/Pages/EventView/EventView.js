import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../../Conponents/SideNav/SideNav';
import PicsView from '../PicsView/PicsView';

const EventView = props => {
  return (
    <div className="flex flex-row w-full min-h-screen" style={{marginTop:"90px"}}>
      <div className='w-2/12'>
        <SideNav />
      </div>
      <div className='w-10/12 flex flex-col flex-1'>
        <PicsView />
      </div>
    </div>
  );
};

EventView.propTypes = {};

export default EventView;
