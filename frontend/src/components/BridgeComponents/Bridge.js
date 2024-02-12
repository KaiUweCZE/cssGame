import React, { forwardRef, useContext, useEffect } from "react";
import barkTexture from "../../styles/images/bark1.webp"
import { LevelContext, BridgeContext, CheckContext, ResultContext, ContainerContext, PartsContext } from "../../contexts/FormContext";
import AboutClass from "../AboutClassComponents/AboutClass";
import Obstacle from "../Obstacle";
import OneBridgeElement from "./OneBridgeElement";
import ManyBridgeElement from "./ManyBridgeElement";
import MasterBridgeElement from "./MasterBridgeElement";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style, level} = useContext(LevelContext)
    const {propertiesBridge, valuesBridge} = useContext(BridgeContext)
    const {propertiesContainer, valuesContainer} = useContext(ContainerContext)
    const {propertiesParts, valuesParts} = useContext(PartsContext)
    const {active, aboutClass} = useContext(CheckContext)
    const {addToBridgeRef} = useContext(ResultContext)

    const mainPartStyle = level.partOfBridgeStyles?.childrenStyle ? level.partOfBridgeStyles : {}
    const partsNumber = level  ? level.partOfBridge : 1;
    const bridgeStyle = {
        // specific style from levelData
        ...style.bridge,
    }
    
    const containerStyle = {
        ...style.container,
    }

   const partStyle = {
        ...style.parts,
    }

    let newPartStyle = {};

    // declare the right value for each property
    propertiesContainer.forEach((property, index) => {
        containerStyle[property] = valuesContainer[index];
    });

    // If we have multiple parts, we create an array and
    // store each part separately to check the position 
    const elements = Array.from({length: partsNumber})

    // declare the right value for each property
    propertiesBridge.forEach((property, index) => {
        bridgeStyle[property] = valuesBridge[index];
    });

    // we declare right value for each properties
    // one form line = one part of bridge
    propertiesParts.forEach((property, index) => {
        newPartStyle[index] = {[property]: valuesParts[index]};
    });
    

    return(
        <>
        <div className="container-bridge" style={containerStyle}>
            { // if there is one option we apply different style and css class
            partsNumber === 1 ?
            <OneBridgeElement add={addToBridgeRef} style={bridgeStyle} background={barkTexture}/>
            :
            (
            level.master ?
            <MasterBridgeElement elements={elements} add={addToBridgeRef} style={bridgeStyle} prev={partStyle} new={newPartStyle} part={mainPartStyle} background={barkTexture}/>
            :
            <ManyBridgeElement elements={elements} add={addToBridgeRef} background={barkTexture}/>
            )
            }
            {level.obstacle ? <Obstacle /> : ""}
        </div>
        {/* this will be component (it shows information about class) */}
        <AboutClass style={aboutClass === "bridge" ? style.bridge : style.container} level={level.id} />
        </>
    )
})


export default Bridge
