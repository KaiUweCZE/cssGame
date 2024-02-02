import React from "react";
import StartPoint from "./StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "./EndPoint";
import MasterCharacter from "./MainCharacter";
import ResultMessage from "./ResultMessage";


const PlayGround = () => {


    return(
        <div className="container-playground">
            <StartPoint />
            <CrossRoad />
            <EndPoint />
            <MasterCharacter />
            <ResultMessage />
        </div>
    )
}

export default PlayGround