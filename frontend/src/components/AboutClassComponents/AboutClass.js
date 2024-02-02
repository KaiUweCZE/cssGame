import React, { useContext, useState } from "react";
import glassImg from "../../styles/images/glass.webp"
import { CheckContext } from "../../contexts/FormContext";
import AboutClassInfo from "./AboutClassInfo";
import AboutClassMenu from "./AboutClassMenu";

const AboutClass = (props) => {
    const [option, setOption] = useState(false)
    const {active, setActive, aboutClass, setAboutClass} = useContext(CheckContext)

    const handleMenu = () => {
        setActive(false)
        setOption(!option)
    }
    
    return(
        <>
        <img className="glass" src={glassImg} alt="" onClick={() => handleMenu()} />
        <div className="about-class">
            {
            option ? <AboutClassMenu active={active} setActive={setActive} setAboutClass={setAboutClass}/> : ""
            }
            {
            active ? <AboutClassInfo active={active} name={`.${aboutClass}`} information={props.style} /> : ""
            }
        </div>
        </>
        
    )
}

export default AboutClass