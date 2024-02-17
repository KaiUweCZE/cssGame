import React from 'react'
import { errorIcon } from '../../data/images'

const ErrorSign = () => {
  return (
    <div className='error__box'>
        <img src={errorIcon} alt="" />
        <p>Error occurs</p>
    </div>
  )
}

export default ErrorSign