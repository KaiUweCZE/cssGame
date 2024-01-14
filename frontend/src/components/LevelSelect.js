import React, { useContext, useState } from "react";
import { LevelContext } from "../contexts/FormContext";
import { levelData } from "../data/LevelData";


// component for selecting levels
const LevelSelect = () => {
    const {setStyle, setLevel} = useContext(LevelContext)
    const [result, setResult] = useState("")

    const setUpLevel = (level) =>{
        const currentLevel = levelData.find(e => e.name.toLocaleLowerCase() === level.toLocaleLowerCase())
        setResult(currentLevel.name)
        console.log(currentLevel);
        setLevel(currentLevel)
        setStyle(currentLevel.bridgeStyles)
    }

    return(
        <ul className="menu-level">
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 1</li>
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 2</li>
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 3</li>
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 4</li>
            <li onClick={(e) => setUpLevel(e.target.innerText)}>level 5</li>
        </ul>
    )
}

export default LevelSelect