import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import '../styles/roadmapStyles.css'
import lockIcon from '../styles/images/icons/lock.svg'
import parallaxBg from '../styles/images/parallax-background/sky.webp'
import cloud1 from '../styles/images/parallax-background/cloud1.webp'
import cloud2 from '../styles/images/parallax-background/cloud2.webp'
import cloud3 from '../styles/images/parallax-background/cloud3.webp'
import { UserContext } from "../contexts/UserContext";
import RoadmapLevel from "../components/RoadmapLevel";
import { LevelContext } from "../contexts/FormContext";
import { levelData } from "../data/LevelData";

const RoadMap = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const level = user.level

    const {setStyle, setLevel} = useContext(LevelContext)
    const [result, setResult] = useState("")


    const setUpLevel = (level) =>{
        const currentLevel = levelData.find(e => e.level === level)
        setResult(currentLevel.name)
        console.log(currentLevel);
        setLevel(currentLevel)
        setStyle({container: currentLevel.containerStyles, bridge: currentLevel.bridgeStyles, partOfBridge: currentLevel.partOfBridgeStyles})
        //setStyle({bridge: bridgeStyle, partOfBridge: partStyle})
        navigate('/game')
    }

    return(
        <div className="roadmap">
            <RoadmapLevel onClick={() => setUpLevel(1)} specialClass='one' num={1} level={level} locked={ level < 0 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(2)} specialClass='two' num={2} level={level} locked={ level < 1 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(3)} specialClass='three' num={3} level={level} locked={ level < 2 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(4)} specialClass='four' num={4} level={level} locked={ level < 3 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(5)} specialClass='five' num={5} level={level} locked={ level < 4 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(6)} specialClass='six' num={6} level={level} locked={ level < 5 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(7)} specialClass='seven' num={7} level={level} locked={ level < 6 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(8)} specialClass='eight' num={8} level={level} locked={ level < 7 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(9)} specialClass='nine' num={9} level={level} locked={ level < 8 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(10)} specialClass='ten' num={10} level={level} locked={ level < 9 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(11)} specialClass='eleven' num={11} level={level} locked={ level < 10 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(12)} specialClass='twelve' num={12} level={level} locked={ level < 11 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(13)} specialClass='thirteen' num={13} level={level} locked={ level < 12 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(14)} specialClass='fourteen' num={14} level={level} locked={ level < 13 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(15)} specialClass='fifteen' num={15} level={level} locked={ level < 14 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(16)} specialClass='sixteen' num={16} level={level} locked={ level < 15 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(17)} specialClass='seventeen' num={17} level={level} locked={ level < 16 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(18)} specialClass='eighteen' num={18} level={level} locked={ level < 17 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(19)} specialClass='nineteen' num={19} level={level} locked={ level < 18 ? true : false }/>
            <RoadmapLevel onClick={() => setUpLevel(20)} specialClass='twenty' num={20} level={level} locked={ level < 19 ? true : false }/>
        </div>
    )
}


export default RoadMap