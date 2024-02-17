import React, { useContext } from 'react'
import { enviromentImages } from '../data/images'
import { LevelContext } from '../contexts/FormContext'

const StartPoint = () => {
    const{level} = useContext(LevelContext)

    const startStyle = {
        'backgroundImage': `url(${enviromentImages.dirt})`,
        ...level?.startPointStyle
    }

    const lawnStyle = {
        'backgroundImage': `url(${enviromentImages.lawn})`
    }

    return(
        <div className='start' style={startStyle}>
            <div className='lawn' style={lawnStyle}></div>
        </div>
    )
}

export default StartPoint