import React from "react";
import StartPoint from "./StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "./EndPoint";
import MainEmoji from "./MainEmoji";
import ResultMessage from "./ResultMessage";


const PlayGround = () => {


    return(
        <div className="container-playground">
            <StartPoint />
            <CrossRoad />
            <EndPoint />
            <MainEmoji />
            <ResultMessage />
        </div>
    )
}

export default PlayGround