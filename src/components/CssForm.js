import React, { useContext, useEffect, useState } from "react";
import leftBracket from '../styles/images/left-bracket.svg'
import rightBracket from '../styles/images/right-bracket.svg'
import playIcon from '../styles/images/play2a.webp'
import playIconaAfter from '../styles/images/play2b.webp'
import plusIcon from '../styles/images/plus.svg'
import minusIcon from '../styles/images/minus.svg'
import closeIcon from '../styles/images/close.svg'
import { list } from "../data/listOfProperities";
import ErrorMessage from "./ErrorMessage";
import SuggestList from "./SuggestList";
import ResultMessage from "./ResultMessage";
import { EmojiContext, BridgeStyleContext, ResultContext, CrossoverStyleContext } from "../contexts/FormContextCopy";

// key component for posting 
const CssForm = (props) => {
    const context = props.name === "bridge"
    // set values for .bridge
    const { setProperty, setPropertyValue } = props.name === "bridge" ? useContext(BridgeStyleContext) : useContext(CrossoverStyleContext);
    // set class for emoji character
    const { setSpecialClass } = useContext(EmojiContext)
    // check if error occurs (typo error)
    const [error, setError] = useState(false);
    // error message for typo error
    const [errotMessage, setErrorMessage] = useState("")
    // form button image
    const [icon, setIcon] = useState(playIcon)
    // text of css value from form
    const [cssValue, setCssValue] = useState("")
    // text of css property from form
    const [cssProperty, setCssProperty] = useState("")
    // values from Result Context
    const { isCorrect, checkBridgePosition } = useContext(ResultContext)
    // Message text after post form
    const [resultText, setResultText] = useState("")
    // check if the form has already been sent
    const [hasChecked, setHasChecked] = useState(false)
    // manage to amount of inputs
    const [inputsAmount, setInputsAmount] = useState([])
    const [stopAdd, setStopAdd] = useState(false)
    // focus state
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        if(hasChecked){
            // a result message will be displayed for 2 secs
            setResultText(isCorrect ? "Congrats" : "Oops")
            setSpecialClass(isCorrect ? "run" : "drop")
            setTimeout(() => setResultText(""), 2000)
        }    
    },[isCorrect, hasChecked])

    const checkTypo = (input) => {
        // is property in the list?
        if (list.includes(input)) {
            // set css property
            setProperty(input);
            // if the error form a previous reply was true set it to false
            setError(false)
            // minimum delay for checkBridge function
            setTimeout(checkBridgePosition, 0);
            // answer was checked
            setHasChecked(true)
        } else {
            // property is not in the list
            setProperty("")
            // error occurs
            setError(true)
            // text to error component
            setErrorMessage("Oh man, this is not a correct css property");
            setTimeout(() => setError(false), 2000)
        }
    }


    // check result
    const checkResult = (e) => {
        e.preventDefault();
        // check css property
        checkTypo(cssProperty)
        if (!error) {
            setPropertyValue(cssValue)
        }
    }

    const handleClick = () => {
        props.func(!props.state)
    }

    const handleIncrement = () => {
        const inputId = Date.now();
        setInputsAmount(prev => [...prev, inputId])
        inputsAmount.length === 2 ? setStopAdd(true) : ""
        console.log(inputsAmount);
    }

    const hangleDecrement = (id) => {
        console.log(id);
        setInputsAmount(
            prev =>
            prev.filter(i => i !== id))
        setStopAdd(false)
        console.log(inputsAmount);
    }

    return (
        <>
        <div className="container-form">
            <div className="headline">
                <span className="element-class">.{props.name}</span>
                <img className="left-bracket" src={leftBracket} alt="" />
            </div>
            <form className="element-class__bridge" action="">
                <div className="form__row">
                    <input type="text" value={cssProperty} name="" id="" 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                    onChange={(e) => setCssProperty(e.target.value)}
                     />
                    <input type="text" name="" id="" onChange={(e) => setCssValue(e.target.value)} />
                </div>
                {
                inputsAmount.map( id => (
                <div className="form__row" key={id}>
                    <input type="text" />
                    <input type="text" />
                    <img className="icon" onClick={() => hangleDecrement(id)} src={minusIcon} alt="" />
                </div>))
                }
                <div className="box-buttons">
                    {
                        stopAdd ? ""
                        :
                        <img className="icon" src={plusIcon} alt="" onClick={handleIncrement}/>
                    }
                    <button className="play" onMouseLeave={() => setIcon(playIcon)} onMouseEnter={() => setIcon(playIconaAfter)} onClick={(e) => checkResult(e)}><img src={icon} alt="" /></button>
                </div>
            </form>
            <img className="right-bracket" src={rightBracket} alt="" />
            {
            isFocused ? 
            <SuggestList value={cssProperty} func={setCssProperty}/>
            :
            ""
            }
            {
                error ? <ErrorMessage text={errotMessage} /> : ""
            }
           
        {
            props.name === "crossover" ? <img className="class-button" onClick={handleClick} src={closeIcon} alt="" /> : ""
        }
        </div>
        { resultText === "" ? "" : <ResultMessage text={resultText} />}
        </>
    )
}

export default CssForm