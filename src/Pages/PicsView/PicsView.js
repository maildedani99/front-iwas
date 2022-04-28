import React from 'react'
import PropTypes from 'prop-types'
import PicCard from '../../Conponents/PicCard/PicsCard'

const PicsView = props => {
  return (
      <div className='flex flex-wrap flex-full pt-16 justify-center'>
           <PicCard />
           <PicCard />
           <PicCard />
           <PicCard />
           <PicCard />
    </div>
  )
}

PicsView.propTypes = {}

export default PicsView