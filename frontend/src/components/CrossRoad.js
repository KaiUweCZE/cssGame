import React, { useContext, useEffect } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import Obstacle from './Obstacle'
import {ContainerContext, ResultContext, LevelContext, CheckContext} from '../contexts/FormContext'

// middle part of playground component
const CrossRoad = () => {
    // information about bridge & checkpoint position to result
    const{bridgeRef, checkpointRef} = useContext(ResultContext)
    const{style, level} = useContext(LevelContext)
    const {active, setActive} = useContext(CheckContext)

    const levelStyle = {
        ...style,
    }

    return(
        <div className='crossover' >
            <CheckPoint ref={checkpointRef} parts={level.partOfBridge}/>
            <Bridge ref={bridgeRef} style={levelStyle}/>
            <River />
            {level.obstacle ? <Obstacle /> : ""}
        </div>
    )
}

export default CrossRoad