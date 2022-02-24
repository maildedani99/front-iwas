import React from 'react'
import PropTypes from 'prop-types'
import EventCard from '../../Conponents/EventCard/EventCard'
import {events} from '../../EventDev/data'
import Navbar from '../../Conponents/Navbar/Navbar'
import EventView from '../EventView/EventView'

const MainPage = props => {

  return (
    <div className='flex flex-wrap w-full '>
      <Navbar />
    {/*   {events.map((item) => 
        <EventCard item={item} key={item.id}/>
      )} */}
      <EventView />
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage