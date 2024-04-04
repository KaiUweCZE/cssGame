import React from "react";


const OneBridgeElement = (props) => {

    return(
        <div className="bridge" ref={props.add} style={{...props.style, backgroundImage: `url(${props.background})`}}></div>
    )
}


export default OneBridgeElement