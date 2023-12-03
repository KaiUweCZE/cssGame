import React from 'react'
import dirt from '../styles/images/edit/dirt.png'
import lawn from '../styles/images/lawn.webp'

const StartPoint = () => {

    const startStyle = {
        'backgroundImage': `url(${dirt})`
    }
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