import React, { useContext } from 'react'
import dirt from '../styles/images/edit/dirt.png'
import lawn from '../styles/images/lawn.webp'
import { LevelContext } from '../contexts/FormContext'


// last part of playground component
const EndPoint = () => {
    const{level} = useContext(LevelContext)

    const specificStyle = {
        // main texture of component
        'backgroundImage': `url(${dirt})`,
        ...level?.endPointStyle
    }
    const lawnStyle = {
        // texture on the top of the component
        'backgroundImage': `url(${lawn})`
    }

    return(
        <div className='end' style={specificStyle}>
            <div className='lawn' style={lawnStyle}></div>
        </div>
    )
}

export default EndPoint