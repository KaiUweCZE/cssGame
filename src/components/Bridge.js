import React, { forwardRef, useContext } from "react";
import plankImg from "../styles/images/plank.webp";
import { StyleContext } from "../contexts/FormContext";


const Bridge = forwardRef((props,ref) => {
    const {property, propertyValue} = useContext(StyleContext)

    const specificStyle = {
        [property]: propertyValue
    }

    return(
        <div className="bridge" style={specificStyle}>
            <img ref={ref} src={plankImg} alt="" />
        </div>
    )
})


export default Bridge