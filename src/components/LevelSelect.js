import React, { useContext, useState } from "react";
import { LevelContext } from "../contexts/FormContext";
import { levelData } from "../data/LevelData";


const LevelSelect = () => {
    const {setStyle} = useContext(LevelContext)
    const [result, setResult] = useState("")


    const setUpLevel = (level) =>{
        const currentLevel = levelData.find(e => e.name.toLocaleLowerCase() === level.toLocaleLowerCase())
        setResult(currentLevel.name)
        setStyle(currentLevel.bridgeStyles)
    }

    return(
        <ul className="menu-level">
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 1</li>
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 2</li>
        </ul>
    )
}

export default LevelSelect