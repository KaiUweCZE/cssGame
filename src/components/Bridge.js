import React, { forwardRef, useContext } from "react";
import plankImg from "../styles/images/plank.webp";
import { LevelContext, StyleContext } from "../contexts/FormContext";

// game component that users will set up
const Bridge = forwardRef((props,ref) => {
    const{style} = useContext(LevelContext)
    const {property, propertyValue} = useContext(StyleContext)


    const specificStyle = {
        // specific style from levelData
        ...style,
        // user's style
        [property]: propertyValue
    }

    return(
        <div className="bridge" style={specificStyle}>
            <img ref={ref} src={plankImg} alt="" />
        </div>
    )
})


export default Bridge