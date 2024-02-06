import React from "react";

const MasterBridgeElement = (props) => {

    return(
        <div className="bridge" style={{...props.style}}>
            { // here we render parts and send info about each to checkpointRef([])
                props.elements.map((part, index) => {
                    return(
                        <div key={index} ref={props.add} className="bridge__item" style={{
                            ...props.partStyle.mainStyle,
                            ...props.partStyle.childrenStyle[index], 
                            backgroundImage: `url(${props.background})`}}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MasterBridgeElement