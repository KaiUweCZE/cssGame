import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { LevelContext, ResultContext } from "../contexts/FormContext";
import { refreshIcon, nextIcon } from "../data/ImagesData";
import { levelData } from "../data/LevelData";
import { useSetLevel } from "../Functions/useSetLevel";
import next from '../styles/images/icons/right-arrow.webp'

const ResultMessage = () => {
    const{resultText} = useContext(ResultContext)
    const {nextLevel, level} = useSetLevel()

    const handleRefresh = () => {
        window.location.href = "/game"
    }

    return(
        <div className="message-result">
            <h2 className={resultText === "" ? "" : (resultText === "Congrats" ? "win" : "lost")}>{resultText}</h2>
            {
                resultText === "Oops" && resultText ?
                <button onClick={() => handleRefresh()}><img className="retry" src={refreshIcon} alt=""/><span>retry</span></button>
                :
                <button onClick={() => nextLevel(level.id + 1)}><span>next level</span><img className="next-level" src={next} alt=""/></button>
                
            }
        </div>
        
    )
}


export default ResultMessage