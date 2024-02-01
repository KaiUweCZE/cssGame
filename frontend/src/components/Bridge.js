import React, { forwardRef, useContext } from "react";
import barkTexture from "../styles/images/bark.webp"
import { LevelContext, BridgeContext, CheckContext, ResultContext, ContainerContext } from "../contexts/FormContext";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style, level} = useContext(LevelContext)
    const {propertiesBridge, valuesBridge} = useContext(BridgeContext)
    const {propertiesContainer, valuesContainer} = useContext(ContainerContext)
    const {active} = useContext(CheckContext)
    const {addToBridgeRef} = useContext(ResultContext)

    const partsNumber = level  ? level.partOfBridge : 1;
    const bridgeStyle = {
        // specific style from levelData
        ...style.bridge,
    }

    
    const containerStyle = {}

    propertiesContainer.forEach((property, index) => {
        containerStyle[property] = valuesContainer[index];
    });


    // If we have multiple parts, we create an array and
    // store each part separately to check the position 
    const elements = Array.from({length: partsNumber})

    propertiesBridge.forEach((property, index) => {
        bridgeStyle[property] = valuesBridge[index];
    });

    return(
        <>
        <div className={partsNumber > 1 ? "bridge grid" : "container-bridge"} style={containerStyle}>

            { // if there is one option we apply different style and css class
            partsNumber === 1 ?
            <div className="bridge" ref={addToBridgeRef} style={{backgroundImage: `url(${barkTexture})`}}></div>
            :
            <>
                { // here we render parts and send info about each to checkpointRef([])
                    elements.map((part, index) => {

                        return(
                            <div key={index} ref={addToBridgeRef} className="grid__item" style={{...style.partOfBridge, backgroundImage: `url(${barkTexture})`}}></div>
                        )
                    })
                }
            </>
        }
        </div>
        { // this will be component (it shows information about class)
            active ? <ul className="checkClass">
                <h2>.bridge</h2>
                {Object.entries(style.bridge).map(([key, value]) => {
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
