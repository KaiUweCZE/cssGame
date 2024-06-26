import React, { useContext, useEffect, useState } from "react";
import { list } from "../../data/listOfProperities";
import ErrorMessage from "@components/Errors/ErrorMessage";
import { contextValues, useFormInputs } from "@utils/cssFormFunctions";
import { EmojiContext } from "@contexts/emojiContext";
import { BridgeContext } from "@contexts/form-contexts/bridgeContext";
import { ResultContext } from "@contexts/form-contexts/resultContext";
import { ContainerContext } from "@contexts/form-contexts/containerContext";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import { PartsContext } from "@contexts/form-contexts/partsContext";
import useLevelUp from "@utils/queries/useLevelUp";
import { UserContext } from "@contexts/UserContext";
import { styleChecker } from "@utils/styleChecker";
import CssFormHeadline from "./CssFormHeadline";
import CssFormInputs from "./CssFormInputs";
import CloseForm from "./CloseForm";

// key component for posting
const CssForm = (props) => {
  // set class for emoji character
  const { handleEmojiClass } = useContext(EmojiContext);
  // check if error occurs (typo error)
  const [error, setError] = useState(false);
  // error message for typo error
  const [errotMessage, setErrorMessage] = useState("");
  // values from Result Context
  const { isCorrectPosition, setChecked, setResultText, checkBridgePosition } =
    useContext(ResultContext);
  // check if the form has already been sent
  const [hasChecked, setHasChecked] = useState(false);

  // which context will be used?
  let context;
  switch (props.name) {
    case "bridge":
      context = useContext(BridgeContext);
      break;
    case "container":
      context = useContext(ContainerContext);
      break;
    case "parts":
      context = useContext(PartsContext);
      break;
    default:
      console.log("unknown value");
      break;
  }

  // thnaks this function propertiesBridge or propertiesContainer will be only properties etc.
  const {
    properties,
    values,
    setProperties,
    setValues,
    handleAddInput,
    handleRemoveInput,
    stopAdd,
    closeForm,
    maxLength,
  } = contextValues(props.name, context);
  // custom hook to set level to database
  const { levelUp } = useLevelUp();
  const { user } = useContext(UserContext);
  const { level } = useContext(LevelContext);

  // allows to see labels before applying style changes
  const {
    cssProperties,
    cssValues,
    setPropertyAtIndex,
    setValueAtIndex,
    handleAddLabel,
    handleRemoveLabel,
  } = useFormInputs([""], [""], maxLength);

  useEffect(() => {
    if (hasChecked) {
      // some level needs right position and right style
      // if only position is enough, styleResult is set to true
      const styleResult = level.styleResolver
        ? styleChecker(level, props.name, properties, values)
        : true;
      console.log("style result je: ", styleResult);
      /* some components need to know if styles are correct, e.g.
                EnemyEmoji animation depends on styleResult
            */
      setChecked(() =>
        isCorrectPosition && styleResult
          ? { check: true, result: true }
          : { check: true, result: false }
      );
      // a result message will be displayed for 2 secs
      setResultText(isCorrectPosition && styleResult ? "Congrats" : "Oops");
      // emoji element gets class according to level and result
      handleEmojiClass(isCorrectPosition && styleResult, level.emojiRun);
      //setTimeout(() => setResultText(""), 2000)
      if (isCorrectPosition) {
        levelUp(user.id, user.level < level.id ? level.id : user.level);
      }
    }
  }, [isCorrectPosition, hasChecked]);

  // property would be ok if it is included in the list or if it is ""
  const checkTypo = (property) => {
    return list.includes(property) || property === "";
  };

  // check result
  const checkResult = () => {
    const propertiesValidator = cssProperties.every(checkTypo);
    if (!propertiesValidator) {
      // wrong property?
      setError(true);
      // text to error component
      setErrorMessage("Oh man, this is not a correct css property");
      setTimeout(() => setError(false), 2000);
    } else {
      setProperties(cssProperties);
      setValues(cssValues);
      setError(false);
      /*
        values and properties are set and now 
        is a user bridge compared
        with the correct bridge position
        */
      setTimeout(checkBridgePosition, 0);
      /*
        The check was carried out and useEffect is turn on
        */
      setHasChecked(true);
    }
  };

  // if form is closed values and properties are removed
  const handleClose = () => {
    closeForm();
    props.func(!props.state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkResult();
  };

  return (
    <>
      <div className="container-form">
        <CssFormHeadline name={props.name} />
        <CssFormInputs
          submit={handleSubmit}
          addInput={handleAddInput}
          removeInput={handleRemoveInput}
          addLabel={handleAddLabel}
          removeLabel={handleRemoveLabel}
          properties={cssProperties}
          setPropertyAtIndex={setPropertyAtIndex}
          values={cssValues}
          setValueAtIndex={setValueAtIndex}
          stop={stopAdd}
        />
        {
          // wrong property?
          error ? <ErrorMessage text={errotMessage} /> : ""
        }

        {props.name !== "bridge" ? <CloseForm func={handleClose} /> : ""}
      </div>
    </>
  );
};

export default CssForm;
