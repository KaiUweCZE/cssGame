import React, { useContext, useState } from "react";
import glassImg from "../styles/images/glass.webp"
import { CheckContext } from "../contexts/FormContext";

const CheckClass = (props) => {
    const [option, setOption] = useState(false)
    const {active, setActive, setAboutClass} = useContext(CheckContext)

    const handleMenu = () => {
        setActive(false)
        setOption(!option)
    }

    const handleSetClass = (e) =>{
        setActive(!active)
        setAboutClass(e)
    }

    return(
        <>
        <img className="glass" src={glassImg} alt="" onClick={() => handleMenu()} />
        {
            option ? 
            <ul className="glass__list">
                <li onClick={(e) => handleSetClass(e.target.innerText)}>bridge</li>
                <li onClick={(e) => handleSetClass(e.target.innerText)}>container</li>
            </ul>
            :
            ""
        }
        </>
        
    )
}

export default CheckClass