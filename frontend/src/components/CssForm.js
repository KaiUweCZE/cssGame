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
import { useFormInputs } from "../Functions/cssFormFunctions";
import { EmojiContext, BridgeContext, ResultContext, ContainerContext, LevelProvider, LevelContext } from "../contexts/FormContext";
import useLevelUp from "../Functions/Queries";
import { UserContext } from "../contexts/UserContext";

// key component for posting 
const CssForm = (props) => {
    // set class for emoji character
    const { setSpecialClass } = useContext(EmojiContext)
    // check if error occurs (typo error)
    const [error, setError] = useState(false);
    // error message for typo error
    const [errotMessage, setErrorMessage] = useState("")
    // form button image
    const [icon, setIcon] = useState(playIcon)
    // text of css value from form
    // values from Result Context
    const { isCorrect, setResultText, checkBridgePosition } = useContext(ResultContext)
    // check if the form has already been sent
    const [hasChecked, setHasChecked] = useState(false)
    // manage to amount of inputs
    // focus state
    const [isFocused, setIsFocused] = useState(false)
    const [suggestValue, setSuggestValue] = useState("")
    const [propertyIndex, setPropertyIndex] = useState(null)
    const { cssProperties, cssValues, setPropertyAtIndex, setValueAtIndex, handleAddInput2, handleRemoveInput2} = useFormInputs([""], [""]);
    const context = props.name === "bridge" ? useContext(BridgeContext) : useContext(ContainerContext)
    const { properties, values, setProperties, setValues, handleAddInput, handleRemoveInput, stopAdd } = props.name === "bridge" ? 
        {
            properties: context.propertiesBridge,
            valuese: context.valuesBridg,
            setProperties: context.setPropertiesBridge,
            setValues: context.setValuesBridge,
            handleAddInput: context.handleAddInput,
            handleRemoveInput: context.handleRemoveInput,
            stopAdd: context.stopAdd
        } 
        : 
        {
            properties: context.propertiesContainer,
            values: context.valuesContainer,
            setProperties: context.setPropertiesContainer,
            setValues: context.setValuesContainer,
            handleAddInput: context.handleAddInput,
            handleRemoveInput: context.handleRemoveInput,
            stopAdd: context.stopAdd
        };


   
    // custom hook to set level to database
    const {levelUp} = useLevelUp()
    const {user, setUser} = useContext(UserContext)
    const {level} = useContext(LevelContext)

    useEffect(() => {
        if(hasChecked){
            // a result message will be displayed for 2 secs
            setResultText(isCorrect ? "Congrats" : "Oops")
            setSpecialClass(isCorrect ? "true" : "false")
            setTimeout(() => setResultText(""), 2000)
            if (isCorrect) {
                levelUp(user.id, user.level < level.level ? level.level : user.level)
            }
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

    const handleClick = () => {
        props.func(!props.state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkResult()
    }


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
            props.name === "container" ? <img className="class-button" onClick={handleClick} src={closeIcon} alt="" /> : ""
        }
        </div>
        </>
    )
}

export default CssForm