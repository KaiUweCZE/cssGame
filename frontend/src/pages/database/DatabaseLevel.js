import CustomBridge from "@components/CustomBridge";
import CustomFormContainer from "@pages/database/CustomFormContainer";
import EmptyBox from "@components/EmptyBox";
import { customContainerContext } from "@contexts/building-contexts/customContainerContext";
import useSetStyle from "@utils/hooks/useSetStyle";
import { useGetLevel } from "@utils/queries/useGetLevel";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomFormBridge from "./CustomFormBridge";
import { customBridgeContext } from "@contexts/building-contexts/customBridgeContext";
import AboutClass from "@components/about-class-components/AboutClass";
import { CheckContext } from "@contexts/form-contexts/checkContext";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";
import { useUserPlayed } from "@utils/queries/useUserPlayed";
import { UserContext } from "@contexts/UserContext";

const DatabaseLevel = () => {
  const { id } = useParams();
  const { data } = useGetLevel(id);
  const level = data?.level;
  const [containerClass, setContainerClass] = useState();
  const { bridgeStyle, setMaxLengthBridge } = useContext(customBridgeContext);
  const { containerStyle, setMaxLengthContainer } = useContext(
    customContainerContext
  );
  const { user } = useContext(UserContext);
  const {
    setChange,
    result,
    setResult,
    setAllowedList,
    setDeniedList,
    setLevelId,
  } = useContext(customCommonContext);
  const { aboutClass } = useContext(CheckContext);
  const { playedLevel, error } = useUserPlayed(id, user.id);

  useEffect(() => {
    playedLevel(id, user?.id);
    setChange(0);
    setResult(false);
    setLevelId(id);
  }, [id]);

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

  useEffect(() => {
    setMaxLengthBridge(level?.numberOfInputs);
    setMaxLengthContainer(level?.numberOfInputs);
    if (level?.allowedList.length > 0) {
      setAllowedList(level?.allowedList);
    }
    if (level?.deniedList.length > 0) {
      setDeniedList(level?.deniedList);
    }
  }, [level]);

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
      {result ? (
        <div className="congrats">
          <p>Congrats</p>
        </div>
      ) : null}
      <div className="building-area">
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
