import React, { useContext } from 'react'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'
import River from './River'
import {ResultContext} from '../contexts/FormContext'



const CrossRoad = () => {
    const{bridgeRef, checkpointRef} = useContext(ResultContext)

    return(
        <div className='crossover'>
            <CheckPoint ref={checkpointRef}/>
            <Bridge ref={bridgeRef}/>
            <River />
        </div>
    )
}

export default CrossRoad