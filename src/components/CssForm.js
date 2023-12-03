import React, { useContext, useState } from "react";
import leftBracket from '../styles/images/left-bracket.svg'
import rightBracket from '../styles/images/right-bracket.svg'
import playIcon from '../styles/images/play2a.webp'
import playIconaAfter from '../styles/images/play2b.webp'
import { list } from "../data/listOfProperities";
import ErrorMessage from "./ErrorMessage";
import SuggestList from "./SuggestList";
import { EmojiContext, StyleContext } from "../contexts/FormContext";

const CssForm = () => {
    const {property, setProperty, setPropertyValue} = useContext(StyleContext);
    const {setPosition, setSpecialClass} = useContext(EmojiContext)
    const [error, setError] = useState(false);
    const [errotMessage, setErrorMessage] = useState("")
    const [icon, setIcon] = useState(playIcon)
    const [value, setValue] = useState("")

    
    const checkTypo = (input) => {
        if (list.includes(input)) {
            setProperty(input);
            setError(false)
            setSpecialClass('run')
            setPosition('92vw')
        } else{
            setProperty("")
            setError(true)
            setErrorMessage("Oh man, we do not know this property in thi universum!");
        }
    }

    
    const checkResult = (e) =>{
        e.preventDefault();
        checkTypo(property)
        if (!error) {
            setPropertyValue(value)
        }  
    }

    return(
        <div className="container-form">
            <span className="element-class">.bridge</span>
            <img className="left-bracket" src={leftBracket} alt="" />
            <form className="element-class__bridge" action="">
                <input type="text" value={property} name="" id="" onChange={(e) => setProperty(e.target.value)}/>
                <input type="text" name="" id="" onChange={(e) => setValue(e.target.value)}/>
                <button className="play" onMouseLeave={() => setIcon(playIcon)} onMouseEnter={() => setIcon(playIconaAfter)} onClick={(e) => checkResult(e)}><img src={icon} alt="" /></button>
            </form>
            <img className="right-bracket" src={rightBracket} alt="" />
            <SuggestList value={property} func={setProperty} />
            {
                error ? <ErrorMessage text={errotMessage}/> : ""
            }
        </div>
    )
}

export default CssForm