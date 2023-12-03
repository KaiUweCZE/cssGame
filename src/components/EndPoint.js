import React from 'react'
import dirt from '../styles/images/edit/dirt.png'
import lawn from '../styles/images/lawn.webp'


const EndPoint = () => {

    const specificStyle = {
        'backgroundImage': `url(${dirt})`
    }
    const lawnStyle = {
        'backgroundImage': `url(${lawn})`
    }

    return(
        <div className='end' style={specificStyle}>
            <div className='lawn' style={lawnStyle}></div>
        </div>
    )
}

export default EndPoint