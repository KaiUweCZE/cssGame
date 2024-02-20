import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { LevelContext, ResultContext } from "../contexts/FormContext";
import { refreshIcon, nextIcon } from "../data/images";
import { levelData } from "../data/LevelData";
import { useSetLevel } from "../Functions/useSetLevel";

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
                <img src={refreshIcon} alt="" onClick={() => handleRefresh()}/>
                :
                <img src={nextIcon} alt="" onClick={() => nextLevel(level.id + 1)}/>
            }
        </div>
        
    )
}


export default ResultMessage