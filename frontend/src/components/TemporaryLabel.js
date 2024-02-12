import React, { useState } from 'react'
import circleIcon from '../styles/images/icons/circle.webp'
import curvedArrow from '../styles/images/icons/arrowCurved.webp'
import checkIcon from '../styles/images/icons/check.webp'

const TemporaryLabel = () => {
  const [active, setActive] = useState(true)
  return (
    <div className={active ? `temporary__box active` : `temporary__box`}>
        <img className='label__close' src={checkIcon} alt="" onClick={() => setActive(!active)}/>
        <img className='label__circle' src={circleIcon} alt="" />
        <img className='label__arrow' src={curvedArrow} alt="" />
        <p>can be used for checking origin styles</p>
    </div>
  )
}

export default TemporaryLabel