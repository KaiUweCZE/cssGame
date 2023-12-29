import React, { useContext } from "react";
import glassImg from "../styles/images/glass.webp"
import { CheckContext } from "../contexts/FormContext";

const CheckClass = (props) => {
    const {active, setActive} = useContext(CheckContext)

    return(
        <img className="glass" onClick={() => setActive(!active)} src={glassImg} alt="" />
    )
}

export default CheckClass