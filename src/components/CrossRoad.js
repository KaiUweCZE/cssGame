import React, { useContext } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import Obstacle from './Obstacle'
import {CrossoverStyleContext, ResultContext, LevelContext} from '../contexts/FormContext'

// middle part of playground component
const CrossRoad = () => {
    // information about bridge & checkpoint position to result
    const{bridgeRef, checkpointRef} = useContext(ResultContext)
    const{style} = useContext(LevelContext)
    const {properties, values} = useContext(CrossoverStyleContext)

    const levelStyle = {
        ...style,
    }

    const specificStyle = {}

    properties.forEach((property, index) => {
        specificStyle[property] = values[index];
    });

    return(
        <div className='crossover' style={specificStyle} >
            <CheckPoint ref={checkpointRef}/>
            <Bridge ref={bridgeRef} style={levelStyle}/>
            <River />
            <Obstacle />
        </div>
    )
}

export default CrossRoad