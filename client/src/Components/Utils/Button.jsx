import React from 'react'

const Button = ({text, type, handleClick }) => {
    
  return (
    <button className='cutom-button' onClick={handleClick}>{text}</button>
  )
}

export default Button