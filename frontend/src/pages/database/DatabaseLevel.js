import CustomBridge from "@components/CustomBridge";
import CustomFormContainer from "@pages/database/CustomFormContainer";
import EmptyBox from "@components/EmptyBox";
import { customContainerContext } from "@contexts/building-contexts/customContainerContext";
import useSetStyle from "@utils/hooks/useSetStyle";
import { useGetLevel } from "@utils/queries/useGetLevel";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CustomFormBridge from "./CustomFormBridge";
import { customBridgeContext } from "@contexts/building-contexts/customBridgeContext";
import AboutClass from "@components/about-class-components/AboutClass";
import {
  CheckContext,
  CheckContextProvider,
} from "@contexts/form-contexts/checkContext";

const DatabaseLevel = () => {
  const { id } = useParams();
  const { data } = useGetLevel(id);
  const level = data?.level;
  const [containerClass, setContainerClass] = useState();
  const { bridgeStyle } = useContext(customBridgeContext);
  const { containerStyle } = useContext(customContainerContext);
  const { aboutClass } = useContext(CheckContext);

  const originContainerStyle = useSetStyle(
    level?.containerProperties,
    level?.containerValues
  );

  const originBridgeStyle = useSetStyle(
    level?.bridgeProperties,
    level?.bridgeValues
  );

  const newBridgeStyle = {
    ...originBridgeStyle,
    ...bridgeStyle,
  };

  const newContainerStyle = {
    ...originContainerStyle,
    ...containerStyle,
  };

  console.log("about class: ", aboutClass);

  return (
    <div className="container-mission">
      <AboutClass
        specificClass="database"
        style={
          aboutClass === "bridge" ? originBridgeStyle : originContainerStyle
        }
      />
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
            containerStyle !== "" ? newContainerStyle : originContainerStyle
          }
          bridgeStyle={bridgeStyle !== "" ? newBridgeStyle : originBridgeStyle}
        />
      </div>
    </div>
  );
};

export default DatabaseLevel;
