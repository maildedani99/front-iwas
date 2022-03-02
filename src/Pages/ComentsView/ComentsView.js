import React from 'react'
import PropTypes from 'prop-types'
import ComentsPost from '../../Conponents/ComentsPost/ComentsPost'

const ComentsView = props => {
  return (
    <div  className='flex flex-wrap flex-full mt-16 ml-8	justify-center	'>
        <div className="flex flex-col  shadow-lg p-4 w-10/12 rounded-md mt-4  ">
            <ComentsPost />
            <ComentsPost />
            <ComentsPost />
            <ComentsPost />
            <ComentsPost />
            <ComentsPost />
        </div>
       
    </div>
  )
}

ComentsView.propTypes = {}

export default ComentsView