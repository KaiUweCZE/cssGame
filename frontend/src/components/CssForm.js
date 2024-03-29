import React, { useContext, useEffect, useState } from "react";
import { cssFormImages } from "../data/ImagesData";
import { list } from "../data/listOfProperities";
import ErrorMessage from "./Errors/ErrorMessage";
import SuggestList from "./SuggestList";
import { contextValues, useFormInputs } from "../Functions/cssFormFunctions";
import { EmojiContext, BridgeContext, ResultContext, ContainerContext, LevelContext, PartsContext } from "../contexts/FormContext";
import useLevelUp from "../Functions/Queries";
import { UserContext } from "../contexts/UserContext";
import { styleChecker } from "../Functions/styleChecker";


// key component for posting 
const CssForm = (props) => {
    // set class for emoji character
    const { handleEmojiClass } = useContext(EmojiContext)
    // check if error occurs (typo error)
    const [error, setError] = useState(false);
    // error message for typo error
    const [errotMessage, setErrorMessage] = useState("")
    // form button image
    const [icon, setIcon] = useState(cssFormImages.playIcon)
    // text of css value from form
    // values from Result Context
    const { isCorrectPosition, checked, setChecked, setResultText, checkBridgePosition } = useContext(ResultContext)
    // check if the form has already been sent
    const [hasChecked, setHasChecked] = useState(false)
    const [index, setIndex] = useState(0)
    // focus state
    const [isFocused, setIsFocused] = useState(false)
    const [suggestValue, setSuggestValue] = useState("")
    const [propertyIndex, setPropertyIndex] = useState(null)
    // allows to see labels before applying style changes
    const { cssProperties, cssValues, setPropertyAtIndex, setValueAtIndex, handleAddLabel, handleRemoveLabel} = useFormInputs([""], [""]);
    // which context will be used?
    let context 
    switch (props.name) {
        case "bridge":
            context = useContext(BridgeContext)
            break;
        case "container":
            context = useContext(ContainerContext)
            break
        case "parts":
            context = useContext(PartsContext)
            break
        default:
            console.log("unknown value");
            break;
    }

    // thnaks this function propertiesBridge or propertiesContainer will be only properties etc.
    const { properties, values, setProperties, setValues, handleAddInput, handleRemoveInput, stopAdd, closeForm } = contextValues(props.name, context)
    // custom hook to set level to database
    const {levelUp} = useLevelUp()
    const {user, setUser} = useContext(UserContext)
    const {level} = useContext(LevelContext)

    useEffect(() => {
        if(hasChecked){
            // some level needs right position and right style
            // if only position is enough, styleResult is set to true
            const styleResult = level.styleResolver ? styleChecker(level, props.name, properties, values) : true
            console.log("style result je: ", styleResult);
            /* some components need to know if styles are correct, e.g.
                EnemyEmoji animation depends on styleResult
            */
            setChecked(() => (isCorrectPosition && styleResult ? {check: true, result: true} : {check: true, result: false}))
            // a result message will be displayed for 2 secs
            setResultText(isCorrectPosition &&  styleResult ? "Congrats" : "Oops")
            // emoji element gets class according to level and result
            handleEmojiClass(isCorrectPosition && styleResult, level.emojiRun)
            //setTimeout(() => setResultText(""), 2000)
            if (isCorrectPosition) {
                levelUp(user.id, user.level < level.id ? level.id : user.level)
            }
            }
            },[isCorrectPosition, hasChecked])

    // property would be ok if it is included in the list or if it is ""
    const checkTypo = (property) => {
        return list.includes(property) || property === "" 
    }

    // check result
    const checkResult = () => {
        const propertiesValidator = cssProperties.every(checkTypo);
    if (!propertiesValidator) {
        // wrong property?
        setError(true)
        // text to error component
        setErrorMessage("Oh man, this is not a correct css property");
        setTimeout(() => setError(false), 2000)
    } else {
        setProperties(cssProperties)
        setValues(cssValues)
        setError(false)
        /*
        values and properties are set and now 
        is a user bridge compared
        with the correct bridge position
        */
        setTimeout(checkBridgePosition, 0)
        /*
        The check was carried out and useEffect is turn on
        */
        setHasChecked(true)
    }
    }

    // if form is closed values and properties are removed
    const handleClose = () => {
        closeForm()
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
                <img className="left-bracket" src={cssFormImages.leftBracket} alt="" />
            </div>
            <form className="form-css" onSubmit={handleSubmit}>
                {cssProperties.map((property, index) => (
                    <div className="form-css__row" key={index}>
                        <input
                            type="text"
                            placeholder={props.name === "parts" ? `${index+1}.element` : ""}
                            value={property}
                            onFocus={() => {
                                setIsFocused(true);
                                setPropertyIndex(index);
                            }}
                            // if user clicks somewhere isFocused will be false after 50ms
                            onBlur={() => setTimeout(() => {setIsFocused(false)}, 50)}
                            // the text that the user typess will be displayed in form
                            onChange={(e) => {setPropertyAtIndex(index, e.target.value), setSuggestValue(e.target.value)}}
                        />
                        <input
                            type="text"
                            value={cssValues[index] || ""}
                            // the text that the user typess will be displayed in form
                            onChange={(e) => setValueAtIndex(index, e.target.value)}
                        />
                        {index > 0 ? <img className="icon" onClick={() => {handleRemoveInput(index), handleRemoveLabel(index)}} src={cssFormImages.minusIcon} alt="" /> : ""}
                    </div>
                ))}
                <div className="box-buttons">
                    {
                        stopAdd ? ""
                        :
                        <img className="icon" src={cssFormImages.plusIcon} alt="" onClick={() => {handleAddInput(), handleAddLabel()}}/>
                    }
                    <button className="play" onMouseLeave={() => setIcon(cssFormImages.playIcon)} onMouseEnter={() => setIcon(cssFormImages.playIconAfter)}  type="submit"><img src={icon} /></button>
                </div>
            </form>
            <img className="right-bracket" src={cssFormImages.rightBracket} alt="" />
            { isFocused ? 
            // if user clicks on a property input and enters some letter, a suggest list will be displayed
            <SuggestList value={suggestValue} func={setPropertyAtIndex} valueIndex={propertyIndex} />
            :
            ""
            }
            {
                // wrong property?
                error ? <ErrorMessage text={errotMessage} /> : ""
            }
           
            {
                props.name !== "bridge" ? <img className="class-button" onClick={handleClose} src={cssFormImages.closeIcon} alt="" /> : ""
            }
        </div>
        </>
    )
}

export default CssForm