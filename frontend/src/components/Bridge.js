import React, { forwardRef, useContext } from "react";
import barkTexture from "../styles/images/bark.webp"
import { LevelContext, BridgeContext, CheckContext, ResultContext, ContainerContext } from "../contexts/FormContext";
import AboutClass from "./AboutClassComponents/AboutClass";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style, level} = useContext(LevelContext)
    const {propertiesBridge, valuesBridge} = useContext(BridgeContext)
    const {propertiesContainer, valuesContainer} = useContext(ContainerContext)
    const {active, aboutClass} = useContext(CheckContext)
    const {addToBridgeRef} = useContext(ResultContext)

    const partsNumber = level  ? level.partOfBridge : 1;
    const bridgeStyle = {
        // specific style from levelData
        ...style.bridge,
    }

    
    const containerStyle = {
        ...style.container,
    }

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
        <div className="container-bridge" style={containerStyle}>
            { // if there is one option we apply different style and css class
            partsNumber === 1 ?
            <div className="bridge" ref={addToBridgeRef} style={{...bridgeStyle, backgroundImage: `url(${barkTexture})`}}></div>
            :
            <>
                { // here we render parts and send info about each to checkpointRef([])
                    elements.map((part, index) => {
                        return(
                            <div key={index} ref={addToBridgeRef} className="bridge__item" style={{...style.partOfBridge, backgroundImage: `url(${barkTexture})`}}></div>
                        )
                    })
                }
            </>
        }
        </div>
        {/* this will be component (it shows information about class) */}
        <AboutClass style={aboutClass === "bridge" ? style.bridge : style.container} />
        </>
    )
})


export default Bridge
