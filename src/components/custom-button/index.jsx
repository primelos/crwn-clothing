import React from 'react'
import './custom-button.styles.scss'


const CustomButton = ({ children, ...otherButtons }) => {

  return (
    <button className='custom-button' {...otherButtons}>
      {children}
    </button>
  )
}

export default CustomButton

