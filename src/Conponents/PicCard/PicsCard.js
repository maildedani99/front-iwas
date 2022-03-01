import React from 'react'
import PropTypes from 'prop-types'
import playa from '../../EventDev/playa.jpg'

const PicCard = props => {
  return (
    <div className="m-8 rounded-md border p-2 shadow-lg text-slate-500 w-3/12">
        <img src={playa} alt="playa" />
    </div>
  )
}

PicCard.propTypes = {}

export default PicCard