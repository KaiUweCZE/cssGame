import React, { useState } from 'react'
import { labelImages } from '../data/images'

const TemporaryLabel = () => {
  const [active, setActive] = useState(true)
  return (
    <div className={active ? `temporary__box active` : `temporary__box`}>
        <img className='label__close' src={labelImages.checkIcon} alt="" onClick={() => setActive(!active)}/>
        <img className='label__circle' src={labelImages.circleIcon} alt="" />
        <img className='label__arrow' src={labelImages.curvedArrow} alt="" />
        <p>can be used for checking origin styles</p>
    </div>
  )
}

export default TemporaryLabel