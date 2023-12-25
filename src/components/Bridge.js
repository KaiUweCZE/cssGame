import React, { forwardRef, useContext } from "react";
import plankImg from "../styles/images/plank.webp";
import barkTexture from "../styles/images/bark.webp"
import { LevelContext, BridgeStyleContext } from "../contexts/FormContext";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style} = useContext(LevelContext)
    const {properties, values} = useContext(BridgeStyleContext)


   const specificStyle = {
        // specific style from levelData
        ...style,
    }

    properties.forEach((property, index) => {
        specificStyle[property] = values[index];
    });

    return(
        <div className="bridge" style={specificStyle}>
            <div ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>
        </div>
    )
})


export default Bridge

// <img ref={ref} src={plankImg} alt="" />
//<div ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>