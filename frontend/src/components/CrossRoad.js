import React, { useContext } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import Obstacle from './Obstacle'
import { ResultContext, LevelContext} from '../contexts/FormContext'

// middle part of playground component
const CrossRoad = () => {
    // information about bridge & checkpoint position to result
    const{bridgeRef, checkpointRef} = useContext(ResultContext)
    const{style, level} = useContext(LevelContext)

    const levelStyle = {
        ...style,
    }

    return(
        <div className='crossover'>
            <CheckPoint ref={checkpointRef} parts={level.partOfBridge}/>
            <Bridge ref={bridgeRef} style={levelStyle}/>
            <River />
        </div>
    )
}

export default CrossRoad