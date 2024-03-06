import React from 'react'
import { errorIcon } from '../../data/ImagesData'

const ErrorSign = () => {
  return (
    <div className='error__box'>
        <img src={errorIcon} alt="" />
        <p>Error occurs</p>
    </div>
  )
}

export default ErrorSign