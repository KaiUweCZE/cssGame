import React, { useEffect, useState } from 'react'
import '../styles/clouds.css'
import cloud1 from '../styles/images/clouds/cloud1.webp'
import cloud2 from '../styles/images/clouds/cloud2.webp'
import cloud3 from '../styles/images/clouds/cloud3.webp'
import cloud4 from '../styles/images/clouds/cloud4.webp'
import cloud5 from '../styles/images/clouds/cloud5.webp'

const Clouds = () => {
    const [position, setPosition] = useState({
        cloud1: {top: 0, left: 5, width: 22},
        cloud2: {top: 0, left: 5, width: 22}, 
        cloud3: {top: 0, left: 5, width: 22},
        cloud4: {top: 0, left: 5, width: 22},
        cloud5: {top: 0, left: 5, width: 22}
    })

    const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5]
    const time = 60000

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => ({
                cloud1:{
                    top: Math.ceil(Math.random() * 7) + Math.random(),
                    left: Math.ceil(Math.random() * 10),
                    width: Math.ceil(Math.random() * 7) + 15
                },
                cloud2:{
                    top: Math.ceil(Math.random() * 7) + Math.random(),
                    left: Math.ceil(Math.random() * 10),
                    width: Math.ceil(Math.random() * 7) + 15
                },
                cloud3:{
                    top: Math.ceil(Math.random() * 7) + Math.random(),
                    left: Math.ceil(Math.random() * 10),
                    width: Math.ceil(Math.random() * 7) + 15
                },
                cloud4:{
                    top: Math.ceil(Math.random() * 7) + Math.random(),
                    left: Math.ceil(Math.random() * 10),
                    width: Math.ceil(Math.random() * 7) + 15
                },
                cloud5:{
                    top: Math.ceil(Math.random() * 7) + Math.random(),
                    left: Math.ceil(Math.random() * 10),
                    width: Math.ceil(Math.random() * 7) + 15
                }
            }))
            console.log(position);
            }, time)

            return () => {clearInterval(interval)}
    })

    

    return (
        <>
        <div className='background-clouds'>
            <img src={clouds[0]} alt="" style={{top: `${position.cloud1.top}rem`, left: `${position.cloud1.left}rem`, width: `${position.cloud1.width}rem`} }/>
            <img src={clouds[1]} alt="" style={{top: `${position.cloud2.top}rem`, left: `${position.cloud2.left}rem`, width: `${position.cloud2.width}rem`} }/>
            <img src={clouds[2]} alt="" style={{top: `${position.cloud3.top}rem`, left: `${position.cloud3.left}rem`, width: `${position.cloud3.width}rem`} }/>
        </div>
        <div className="background-clouds-second">
            <img src={clouds[1]} alt="" style={{top: `${position.cloud2.top}rem`, left: `${position.cloud4.left}rem`, width: `${position.cloud4.width}rem`} }/>
            <img src={clouds[0]} alt="" style={{top: `${position.cloud4.top}rem`, left: `${position.cloud5.left}rem`, width: `${position.cloud5.width}rem`} }/>
            <img src={clouds[4]} alt="" style={{top: `${position.cloud5.top}rem`, left: `${position.cloud4.left}rem`, width: `${position.cloud3.width}rem`} }/>
        </div>
        </>
    )
}

export default Clouds