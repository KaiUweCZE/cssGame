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
    //const { property, propertyValue, setProperty, setPropertyValue } = props.name === "bridge" ? useContext(BridgeStyleContext) : useContext(CrossoverStyleContext);
    // set class for emoji character
    const { setSpecialClass } = useContext(EmojiContext)
    // check if error occurs (typo error)
    const [error, setError] = useState(false);
    // error message for typo error
    const [errotMessage, setErrorMessage] = useState("")
    // form button image
    const [icon, setIcon] = useState(playIcon)
    // text of css value from form
    const [cssValues, setCssValues] = useState([""])
    // text of css property from form
    const [cssProperties, setCssProperties] = useState([""])
    // values from Result Context
    const { isCorrect, setResultText, checkBridgePosition } = useContext(ResultContext)
    // check if the form has already been sent
    const [hasChecked, setHasChecked] = useState(false)
    // manage to amount of inputs
    const [stopAdd, setStopAdd] = useState(false)
    // focus state
    const [isFocused, setIsFocused] = useState(false)
    const [suggestValue, setSuggestValue] = useState("")
    const [propertyIndex, setPropertyIndex] = useState(null)

    ///
    const {properties, values, setProperties, setValues, handleAddInput, handleRemoveInput} = useContext(BridgeStyleContext)

    useEffect(() => {
        if(hasChecked){
            // a result message will be displayed for 2 secs
            setResultText(isCorrect ? "Congrats" : "Oops")
            setSpecialClass(isCorrect ? "run" : "drop")
            setTimeout(() => setResultText(""), 2000)
        }    
    },[isCorrect, hasChecked])

    const checkTypo = (property) => {
        return list.includes(property) || property === "" 
    }

    // check result
    const checkResult = () => {
        const propertiesValidator = cssProperties.every(checkTypo);
    if (!propertiesValidator) {
        console.error("Některé z vlastností nejsou korektní.");
        setError(true)
        // text to error component
        setErrorMessage("Oh man, this is not a correct css property");
        setTimeout(() => setError(false), 2000)
    } else {
        setProperties(cssProperties)
        setValues(cssValues)
        setError(false)
        setTimeout(checkBridgePosition, 0)
        console.log("Všechny vlastnosti jsou korektní:", cssProperties, cssValues);
        console.log("vlastnosti a hodnoty: ",properties, values);
        //setTimeout(checkBridgePosition, 0);
        setHasChecked(true)
    }
    }

    const handleAddInput2 = () => {
        if (!stopAdd) {
            setCssProperties(properties => [...properties, ""]);
            setCssValues(values => [...values, ""])
        }else if(cssProperties.length === 3){
            setStopAdd(true)
        }
    };

    const handleRemoveInput2 = index => {
        if (cssProperties.length > 1) {
            setCssProperties(prevProperties => prevProperties.filter((_, i) => i !== index));
            setCssValues(prevValues => prevValues.filter((_, i) => i !== index));
            setStopAdd(false);
        }
        
    };

    const handleClick = () => {
        props.func(!props.state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkResult()
    }

    // Tato funkce nastaví hodnotu cssProperties na základě indexu
    const setPropertyAtIndex = (index, value) => {
        setCssProperties(prev => {
            const newProperties = [...prev];
            newProperties[index] = value;
            return newProperties;
        });
    };

    // Tato funkce nastaví hodnotu cssValues na základě indexu
    const setValueAtIndex = (index, value) => {
        setCssValues(prev => {
            const newValues = [...prev];
            newValues[index] = value;
            return newValues;
        });
    };

    return (
        <>
        <div className="container-form">
            <div className="headline">
                <span className="element-class">.{props.name}</span>
                <img className="left-bracket" src={leftBracket} alt="" />
            </div>
            <form className="element-class__bridge" onSubmit={handleSubmit}>
                {cssProperties.map((property, index) => (
                    <div className="form__row" key={index}>
                        <input
                            type="text"
                            value={property}
                            onFocus={() => {
                                setIsFocused(true);
                                //setSuggestValue(property);
                                setPropertyIndex(index);
                            }}
                            onBlur={() => setTimeout(() => {setIsFocused(false)}, 50)}
                            onChange={(e) => {setPropertyAtIndex(index, e.target.value), setSuggestValue(e.target.value)}}
                        />
                        <input
                            type="text"
                            value={cssValues[index] || ""}
                            onChange={(e) => setValueAtIndex(index, e.target.value)}
                        />
                        {index > 0 ? <img className="icon" onClick={() => {handleRemoveInput(index), handleRemoveInput2(index)}} src={minusIcon} alt="" /> : ""}
                    </div>
                ))}
                <div className="box-buttons">
                    {
                        stopAdd ? ""
                        :
                        <img className="icon" src={plusIcon} alt="" onClick={() => {handleAddInput(), handleAddInput2()}}/>
                    }
                    <button className="play" onMouseLeave={() => setIcon(playIcon)} onMouseEnter={() => setIcon(playIconaAfter)}  type="submit"><img src={icon} /></button>
                </div>
            </form>
            <img className="right-bracket" src={rightBracket} alt="" />
            { isFocused ? 
            <SuggestList value={suggestValue} func={setPropertyAtIndex} valueIndex={propertyIndex} />
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
        {/* resultText === "" ? "" : <ResultMessage text={resultText} />*/}
        </>
    )
}

export default CssForm