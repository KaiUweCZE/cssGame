import React, { useContext } from 'react'
import { enviromentImages } from '../data/ImagesData'
import { LevelContext } from '../contexts/FormContext'


// last part of playground component
const EndPoint = () => {
    const{level} = useContext(LevelContext)

    const specificStyle = {
        // main texture of component
        'backgroundImage': `url(${enviromentImages.dirt})`,
        ...level?.endPointStyle
    }
    const lawnStyle = {
        // texture on the top of the component
        'backgroundImage': `url(${enviromentImages.lawn})`
    }

    return(
        <div className='end' style={specificStyle}>
            <div className='lawn' style={lawnStyle}></div>
        </div>
    )
}

export default EndPoint