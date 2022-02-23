import React from 'react'
import PropTypes from 'prop-types'
import EventCard from '../../Conponents/EventCard/EventCard'
import {events} from '../../EventDev/data'

const MainPage = props => {

  return (
    <div className='flex flex-wrap w-full px-16'>
      {events.map((item) => 
        <EventCard item={item} key={item.id}/>

      )}
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage