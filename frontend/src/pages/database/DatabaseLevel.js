import CustomBridge from "@components/CustomBridge";
import CustomFormContainer from "@pages/database/CustomFormContainer";
import EmptyBox from "@components/EmptyBox";
import CssFormHeadline from "@components/css-form/CssFormHeadline";
import CssFormInputs from "@components/css-form/CssFormInputs";
import { customContainerContext } from "@contexts/building-contexts/customContainerContext";
import { useFormInputs } from "@utils/cssFormFunctions";
import { handleAddInput, handleRemoveInput } from "@utils/formInputsHandlers";
import useSetStyle from "@utils/hooks/useSetStyle";
import { useGetLevel } from "@utils/queries/useGetLevel";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomFormBridge from "./CustomFormBridge";
import { customBridgeContext } from "@contexts/building-contexts/customBridgeContext";

const DatabaseLevel = () => {
  const { id } = useParams();
  const { data } = useGetLevel(id);
  const level = data?.level;
  const [containerClass, setContainerClass] = useState();
  const { bridgeStyle } = useContext(customBridgeContext);
  const { containerStyle } = useContext(customContainerContext);
  const originContainerStyle = useSetStyle(
    level?.containerProperties,
    level?.containerValues
  );

  const originBridgeStyle = useSetStyle(
    level?.bridgeProperties,
    level?.bridgeValues
  );

  return (
    <div className="container-mission">
      <div className="box__classes">
        <CustomFormBridge name="bridge" />

        {containerClass ? (
          <CustomFormContainer name="container" />
        ) : (
          <EmptyBox state={containerClass} func={setContainerClass} />
        )}
      </div>
      <div className="BuildingArea">
        <CustomBridge
          containerStyle={
            containerStyle !== "" ? containerStyle : originContainerStyle
          }
          bridgeStyle={bridgeStyle !== "" ? bridgeStyle : originBridgeStyle}
        />
      </div>
    </div>
  );
};

export default DatabaseLevel;
