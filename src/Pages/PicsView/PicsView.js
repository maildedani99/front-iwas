import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../Conponents/UserCard/UserCard'

const PicsView = props => {
  return (
      <div className='flex flex-wrap flex-full overflow-y-scroll	'>
          <UserCard />
          <UserCard /><UserCard /><UserCard /><UserCard /><UserCard /><UserCard />  
    </div>
  )
}

PicsView.propTypes = {}

export default PicsView