import React from 'react'
import errorIcon from '../../styles/images/icons/error.svg'

const ErrorSign = () => {
  return (
    <div className='error__box'>
        <img src={errorIcon} alt="" />
        <p>Error occurs</p>
    </div>
  )
}

export default ErrorSign