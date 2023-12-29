import React, { useContext } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import Obstacle from './Obstacle'
import {CrossoverStyleContext, ResultContext, LevelContext, CheckContext} from '../contexts/FormContext'

// middle part of playground component
const CrossRoad = () => {
    // information about bridge & checkpoint position to result
    const{bridgeRef, checkpointRef} = useContext(ResultContext)
    const{style, level} = useContext(LevelContext)
    const {properties, values} = useContext(CrossoverStyleContext)
    const {active, setActive} = useContext(CheckContext)

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
            {level.obstacle ? <Obstacle /> : ""}
        </div>
    )
}

export default CrossRoad