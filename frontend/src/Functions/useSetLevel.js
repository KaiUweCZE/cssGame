import { useContext, useState } from "react";
import { levelData } from "../data/LevelData";
import { LevelContext } from "../contexts/FormContext";


export const useSetLevel = () => {
    const [result, setResult] = useState("")
    const {setStyle, setLevel, level} = useContext(LevelContext)

    const nextLevel = (level) => {
        const currentLevel = levelData.find(e => e.id === level)
        setResult(currentLevel.id)
        console.log(currentLevel);
        setLevel(currentLevel)
        console.log("current level", currentLevel);
        setStyle({container: currentLevel.containerStyles, bridge: currentLevel.bridgeStyles, partOfBridge: currentLevel.partOfBridgeStyles})
        window.location.href = '/game'
    }

    return {nextLevel, level}
}