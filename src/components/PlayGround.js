import React from "react";
import StartPoint from "./StartPoint";
import CrossRoad from "./CrossRoad";
import EndPoint from "./EndPoint";
import MasterCharacter from "./MasterCharacter";


const PlayGround = () => {


    return(
        <div className="container-playground">
            <StartPoint />
            <CrossRoad />
            <EndPoint />
            <MasterCharacter />
        </div>
    )
}

export default PlayGround