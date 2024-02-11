import React from "react";

const MasterBridgeElement = (props) => {

    console.log("children style jsou: ", props.prev, props.new);

    
    const mergedStyles = {}


    console.log("Important");

    return(
        <div className="bridge" style={{...props.style}}>
            { // here we render parts and send info about each to checkpointRef([])
                props.elements.map((part, index) => {
                    return(
                        <div key={index} ref={props.add} className="bridge__item" style={{
                            ...props.part.mainStyle,
                            ...props.prev[index],
                            ...props.new[index],
                            backgroundImage: `url(${props.background})`}}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MasterBridgeElement