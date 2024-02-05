import React, { useContext } from 'react'
import dirt from '../styles/images/edit/dirt.png'
import lawn from '../styles/images/lawn.webp'
import { LevelContext } from '../contexts/FormContext'

const StartPoint = () => {
    const{level} = useContext(LevelContext)

    const startStyle = {
        'backgroundImage': `url(${dirt})`,
        ...level?.startPointStyle
    }

    console.log(level?.startPointStyle);
    const lawnStyle = {
        'backgroundImage': `url(${lawn})`
    }

    return(
        <div className='start' style={startStyle}>
            <div className='lawn' style={lawnStyle}></div>
        </div>
    )
}

export default StartPoint