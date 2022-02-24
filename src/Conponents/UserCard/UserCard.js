import React from 'react'
import PropTypes from 'prop-types'
import maria from '../../EventDev/maria.jpg'

const UserCard = props => {
  return (
      <div className='w-3/12 m-8 rounded-md border p-2 shadow-lg text-slate-500'>
          <img src={maria} alt="maria" />
          <div className='mt-4'>
          <span>Maria Andrés Medina</span>
          </div>
    </div>
  )
}

UserCard.propTypes = {}

export default UserCard