import React, { useEffect, useState } from 'react'
import '../styles/clouds.css'
import cloud1 from '../styles/images/parallax-background/cloud1.webp'
import cloud2 from '../styles/images/parallax-background/cloud2.webp'
import cloud3 from '../styles/images/parallax-background/cloud3.webp'

const Clouds = () => {
    const [position, setPosition] = useState({cloud1: 0, cloud2: 0, cloud3: 0})

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => ({
                cloud1: Math.ceil(Math.random() * 9) + Math.random(),
                cloud2: Math.ceil(Math.random() * 9) + Math.random(),
                cloud3: Math.ceil(Math.random() * 9) + Math.random()
            }))
            console.log(position);
            }, 60000)

            return () => clearInterval(interval)
    })

    

    return (
        <>
        <div className='background-clouds'>
            <img src={cloud1} alt="" style={{top: `${position.cloud1}rem`}}/>
            <img src={cloud2} alt="" style={{top: `${position.cloud2}rem`}}/>
            <img src={cloud3} alt="" style={{top: `${position.cloud3}rem`}}/>
        </div>
        <div className='background-clouds second'>
            <img src={cloud1} alt="" style={{top: `${position.cloud2}rem`}}/>
            <img src={cloud2} alt="" style={{top: `${position.cloud3}rem`}}/>
            <img src={cloud3} alt="" style={{top: `${position.cloud1}rem`}}/>
        </div>
        </>
    )
}

export default Clouds