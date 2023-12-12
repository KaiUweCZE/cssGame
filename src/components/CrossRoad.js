import React, { useContext } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import {CrossoverStyleContext, ResultContext, LevelContext} from '../contexts/FormContext'

// middle part of playground component
const CrossRoad = () => {
    // information about bridge & checkpoint position to result
    const{bridgeRef, checkpointRef} = useContext(ResultContext)
    const{style} = useContext(LevelContext)
    const {property, propertyValue} = useContext(CrossoverStyleContext)


    const specificStyle = {
        // specific style from levelData
        ...style,
        // user's style
        [property]: propertyValue
    }

    return(
        <div className='crossover' style={specificStyle}>
            <CheckPoint ref={checkpointRef}/>
            <Bridge ref={bridgeRef}/>
            <River />
        </div>
    )
}

export default CrossRoad