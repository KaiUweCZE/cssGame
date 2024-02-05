import React from "react";

const ManyBridgeElement = (props) => {

    return(
        <>
        {
        props.elements.map((part, index) => {
                return(
                    <div key={index} ref={props.add} className="bridge__item" style={{backgroundImage: `url(${props.background})`}}></div>
                )
        }
        )}
        </>
    )
}


export default ManyBridgeElement