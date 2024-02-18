import React, { useEffect, useState } from 'react'
import '../styles/introStyles.css'
import {enviromentImages, guideImg, masterImg} from '../data/images'
import GuideEmoji from '../components/GuideEmoji'
import MainEmoji from '../components/MainEmoji'
import FirstScene from '../components/Intro/FirstScene'
import SecondScene from '../components/Intro/SecondScene'
import ThirdScene from '../components/Intro/ThirdScene'
import { useNavigate } from 'react-router-dom'

// this page will serve as an intro to the game
// and add story line
const Welcome = () => {
  const [scene, setScene] = useState("first")
  const navigate = useNavigate()

  useEffect(() => {
    if (scene === 'last') {
      navigate("/map")
    }
  },[scene])

  return (
    <>
      {
        scene === 'first' ? <FirstScene scene={scene} setScene = {setScene} /> : null
      }
      {
        scene === 'second' ? <SecondScene scene={scene} setScene = {setScene} /> : null
      }
      {
        //scene === 'third' ? <ThirdScene scene={scene} setScene = {setScene} /> : null
      }
    </>
  )
}

export default Welcome