import React, { forwardRef, useContext } from "react";
import plankImg from "../styles/images/plank.webp";
import barkTexture from "../styles/images/bark.webp"
import { LevelContext, BridgeStyleContext, CheckContext } from "../contexts/FormContext";
import { levelData } from "../data/LevelData";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style, level} = useContext(LevelContext)
    const {properties, values} = useContext(BridgeStyleContext)
    const {active} = useContext(CheckContext)

    const partsNumber = level  ? level.partOfBridge : 1;
    const specificStyle = {
        // specific style from levelData
        ...style,
    }

    properties.forEach((property, index) => {
        specificStyle[property] = values[index];
    });

    return(
        <div className={partsNumber > 1 ? "bridge grid" : "bridge"} style={specificStyle}>

            {
            partsNumber === 1 ?
            <div ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>
            :
            <>
                <div className="grid__item first" ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>
                <div className="grid__item second" ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>
                <div className="grid__item third" ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>
            </>
        }
        {
            active ? <ul className="checkClass">
                <h2>.bridge</h2>
                {Object.entries(style).map(([key, value]) => {
                return(
                    <li>{key}: {value}</li>
                )
                })}
                </ul>
             : 
            ""
        }
        </div>
    )
})


export default Bridge

// <img ref={ref} src={plankImg} alt="" />
//<div ref={ref} style={{backgroundImage: `url(${barkTexture})`}}></div>