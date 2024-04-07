import CustomBridge from "@components/CustomBridge";
import EmptyBox from "@components/EmptyBox";
import CssFormHeadline from "@components/css-form/CssFormHeadline";
import CssFormInputs from "@components/css-form/CssFormInputs";
import RightBracket from "@components/css-form/RightBracket";
import { useFormInputs } from "@utils/cssFormFunctions";
import useSetStyle from "@utils/hooks/useSetStyle";
import { useGetLevel } from "@utils/queries/useGetLevel";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DatabaseLevel = () => {
  const { id } = useParams();
  const { data } = useGetLevel(id);
  const level = data?.level;
  const [containerClass, setContainerClass] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [suggestValue, setSuggestValue] = useState("");
  const [propertyIndex, setPropertyIndex] = useState(null);
  const [stopAdd, setStopAdd] = useState(1);
  const containerStyle = useSetStyle(
    level?.containerProperties,
    level?.containerValues
  );
  const {
    cssProperties,
    cssValues,
    setPropertyAtIndex,
    setValueAtIndex,
    handleAddLabel,
    handleRemoveLabel,
  } = useFormInputs([""], [""]);
  const bridgeStyle = useSetStyle(level?.bridgeProperties, level?.bridgeValues);
  console.log(id, data);

  const handleAddInput = () => {
    console.log("add");
  };

  const handleRemoveInput = () => {
    console.log("remove");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <div className="container-mission">
      <div className="box__classes">
        <div className="container-form">
          <CssFormHeadline name="birdge" />
          <CssFormInputs
            submit={handleSubmit}
            addInput={handleAddInput}
            removeInput={handleRemoveInput}
            addLabel={handleAddLabel}
            removeLabel={handleRemoveLabel}
            properties={cssProperties}
            propertyIndex={setPropertyAtIndex}
            values={cssValues}
            valueIndex={setValueAtIndex}
            setPropertyIndex={setPropertyIndex}
            setSuggestValue={setSuggestValue}
            setIsFocused={setIsFocused}
            stop={stopAdd}
          />
          <RightBracket />
        </div>

        <EmptyBox state={containerClass} func={setContainerClass} />
      </div>
      <form></form>
      <div className="BuildingArea">
        <CustomBridge
          containerStyle={containerStyle}
          bridgeStyle={bridgeStyle}
        />
      </div>
    </div>
  );
};

export default DatabaseLevel;
