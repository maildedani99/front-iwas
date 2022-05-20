import React, { useState } from 'react'
import PropTypes from 'prop-types'

const InputText = ({style, focusStyle, placeholder, name, className }) => {

    const [onFocusStyle, setOnFocusStyle] = useState(style)
  return (
    <input className={className} type="text" style={onFocusStyle} onFocus={()=>setOnFocusStyle(focusStyle)} onBlur={()=>setOnFocusStyle(style)} placeholder={placeholder} />
  )
}

InputText.propTypes = {}

export default InputText