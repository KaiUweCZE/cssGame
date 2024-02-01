import React, { forwardRef, useContext } from "react";
import barkTexture from "../styles/images/bark.webp"
import { LevelContext, BridgeStyleContext, CheckContext, ResultContext } from "../contexts/FormContext";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style, level} = useContext(LevelContext)
    const {properties, values} = useContext(BridgeStyleContext)
    const {active} = useContext(CheckContext)
    const {addToBridgeRef} = useContext(ResultContext)

    const partsNumber = level  ? level.partOfBridge : 1;
    const specificStyle = {
        // specific style from levelData
        ...style,
    }

    // If we have multiple parts, we create an array and
    // store each part separately to check the position 
    const elements = Array.from({length: partsNumber})

    properties.forEach((property, index) => {
        specificStyle[property] = values[index];
    });

    return(
        <>
        <div className={partsNumber > 1 ? "bridge grid" : "bridge"} style={specificStyle}>

            { // if there is one option we apply different style and css class
            partsNumber === 1 ?
            <div ref={addToBridgeRef} style={{backgroundImage: `url(${barkTexture})`}}></div>
            :
            <>
                { // here we render parts and send info about each to checkpointRef([])
                    elements.map((part, index) => {

                        return(
                            <div key={index} ref={addToBridgeRef} className="grid__item" style={{backgroundImage: `url(${barkTexture})`}}></div>
                        )
                    })
                }
            </>
        }
        </div>
        { // this will be component (it shows information about class)
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
        </>
    )
})


export default Bridge
