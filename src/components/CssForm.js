import React, { useState } from "react";
import leftBracket from '../styles/images/left-bracket.svg'
import rightBracket from '../styles/images/right-bracket.svg'
import playIcon from '../styles/images/play2.svg'
import { list } from "../data/listOfProperities";
import ErrorMessage from "./ErrorMessage";
import SuggestList from "./SuggestList";

const CssForm = () => {
    const [property, setProperty] = useState("");
    const [propertyValue, setPropertyValue] = useState("");
    const [error, setError] = useState(false);
    const [errotMessage, setErrorMessage] = useState("")
    
    const checkTypo = (e) => {
        if (list.includes(e)) {
            setProperty(e);
            setError(false)
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
            console.log(property, propertyValue);
        }  
    }

    return(
        <div className="container-form">
            <span className="element-class">.bridge</span>
            <img className="left-bracket" src={leftBracket} alt="" />
            <form className="element-class__bridge" action="">
                <input type="text" value={property} name="" id="" onChange={(e) => setProperty(e.target.value)}/>
                <input type="text" name="" id="" onChange={(e) => setPropertyValue(e.target.value)}/>
                <button className="play" onClick={(e) => checkResult(e)}><img src={playIcon} alt="" /></button>
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