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
import { EmojiContext, BridgeStyleContext, ResultContext, CrossoverStyleContext } from "../contexts/FormContext";

// key component for posting 
const CssForm = (props) => {
    const context = props.name === "bridge"
    // set values for .bridge
    const { property, propertyValue, setProperty, setPropertyValue } = props.name === "bridge" ? useContext(BridgeStyleContext) : useContext(CrossoverStyleContext);
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

    ///
    const [properties, setProperties] = useState([""]);
    const [values, setValues] = useState([""]);

    useEffect(() => {
        if(hasChecked){
            // a result message will be displayed for 2 secs
            setResultText(isCorrect ? "Congrats" : "Oops")
            setSpecialClass(isCorrect ? "run" : "drop")
            setTimeout(() => setResultText(""), 2000)
        }    
    },[isCorrect, hasChecked])

    const checkTypo = (input, index) => {
        // is property in the list?
        if (list.includes(input)) {
            // set css property
            //setProperty(input);
            handlePropertyChange(input, index)
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
    const checkResult = (e, index) => {
        e.preventDefault();
        // check css property
        checkTypo(cssProperty, index)
        if (!error) {
            handleValueChange(cssValue, index)
            //setPropertyValue(cssValue)
            console.log(property, propertyValue);
        }
    }

    const handleClick = () => {
        props.func(!props.state)
    }

    const handleIncrement = () => {
        const inputId = Date.now();
        setInputsAmount(prev => [...prev, inputId])
        setProperty(prev => [...prev, ""]);
        setPropertyValue(prev=> [...prev, ""])
        inputsAmount.length === 2 ? setStopAdd(true) : ""
        console.log(inputsAmount);
    }

    const hangleDecrement = (id) => {
        const index = inputsAmount.findIndex(item => item === id);
        setInputsAmount(prev => prev.filter(item => item !== id));
        setProperty(prev => prev.filter((_, i) => i !== index));
        setPropertyValue(prev => prev.filter((_, i) => i !== index));
        setStopAdd(false)
    }

    const handlePropertyChange = (id, value) => {
        const index = inputsAmount.findIndex(item => item === id);
        setProperty(prev => {
            const newProperties = [...prev];
            newProperties[index] = value;
            return newProperties;
        });
    };

    const handleValueChange = (id, value) => {
        const index = inputsAmount.findIndex(item => item === id);
        setPropertyValue(prev => {
            const newValues = [...prev];
            newValues[index] = value;
            return newValues;
        });
    };
    /////
    const handlePropertyChange2 = (index, newProperty) => {
        const updatedProperties = [...properties];
        updatedProperties[index] = newProperty;
        setProperties(updatedProperties);
    };

    const handleValueChange2 = (index, newValue) => {
        const updatedValues = [...values];
        updatedValues[index] = newValue;
        setValues(updatedValues)
    };

    const handleAddInput = () => {
        setProperties([...properties, ""]);
        setValues([...values, ""]);
    };

    const handleRemoveInput = index => {
        const filteredProperties = properties.filter((_, i) => i !== index);
        setProperties(filteredProperties);
        const filteredValues = values.filter((_, i) => i !== index);
        setValues(filteredValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(properties, values);
    }

    return (
        <>
        <div className="container-form">
            <div className="headline">
                <span className="element-class">.{props.name}</span>
                <img className="left-bracket" src={leftBracket} alt="" />
            </div>
            <form className="element-class__bridge" onSubmit={handleSubmit}>
                {properties.map((property, index) => (
                    <div className="form__row" key={index}>
                        <input
                            type="text"
                            value={property}
                            onChange={(e) => handlePropertyChange2(index, e.target.value)}
                        />
                        <input
                            type="text"
                            value={values[index] || ""}
                            onChange={(e) => handleValueChange2(index, e.target.value)}
                        />
                        <img className="icon" onClick={() => handleRemoveInput(index)} src={minusIcon} alt="" />
                    </div>
                ))}
                <input type="submit" className="example-button" value="Odeslat"/>
                <div className="box-buttons">
                    {
                        stopAdd ? ""
                        :
                        <img className="icon" src={plusIcon} alt="" onClick={handleAddInput}/>
                    }
                    <button className="play" onMouseLeave={() => setIcon(playIcon)} onMouseEnter={() => setIcon(playIconaAfter)} onClick={(e) => checkResult(e)}><img src={icon} alt="" /></button>
                </div>
            </form>
            <div className="grid">
                {
                    properties.map((property, index) => (
                        <p key={index}>{property}: {values[index]}</p>
                    ))
                }
            </div>   
        </div>
    
        </>
    )
}

export default CssForm