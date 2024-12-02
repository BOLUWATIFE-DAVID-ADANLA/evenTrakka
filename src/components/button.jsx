import React from 'react'

const button = ({onClick, label}) => {
  return (
    <button onClick={onClick}
    className='bg-primary'
    >
      {label}
    </button>
  )
}

export default button