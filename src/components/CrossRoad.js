import React, { useRef, useState } from 'react'
import wave from '../styles/images/wave.png'
import Bridge from './Bridge'
import CheckPoint from './CheckPoint'



const CrossRoad = () => {
    const [isCorrect, setIsCorrect] = useState(false)
    const checkpointRef = useRef(null);
    const bridgeRef = useRef(null);

    const checkBridgePosition = () => {
        const checkpointPosition = checkpointRef.current.getBoundingClientRect();
        const bridgePosition = bridgeRef.current.getBoundingClientRect();

        const isCorrectPosition = (
            bridgePosition.left >= checkpointPosition.left &&
            bridgePosition.right <= checkpointPosition.right &&
            bridgePosition.top >= checkpointPosition.top &&
            bridgePosition.bottom >= checkpointPosition.bottom
        );

        setIsCorrect(isCorrectPosition)
        if (isCorrect) {
            console.log("Great!!");
        } else {
            console.log("Error");
            console.log("checkpoint: ", checkpointPosition);
            console.log("bridge position: ", bridgePosition);
        }
    }

    return(
        <div className='crossover'>
            <CheckPoint ref={checkpointRef}/>
            <Bridge ref={bridgeRef}/>
            <img className='crossover__image' src={wave} alt="" srcset="" onClick={() => checkBridgePosition()}/>
        </div>
    )
}

export default CrossRoad