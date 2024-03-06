import React from "react";
import StartPoint from "./StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "./EndPoint";
import MainEmoji from "./Emojis/MainEmoji";
import ResultMessage from "./ResultMessage";
import GuideEmoji from "./Emojis/GuideEmoji";
import EnemyEmoji from './Emojis/EnemyEmojis'



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