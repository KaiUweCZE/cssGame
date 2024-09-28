import React, { useState, useContext } from "react";
import "./building-styles.css";
import BuildingArea from "@pages/building-mode/building-mode-components/BuildingArea";
import BuildingForm from "@pages/building-mode/building-mode-components/BuildingForm";
import { RestrictionProvider } from "@contexts/building-contexts/restrictionContext";
import { BuildingProvider } from "@contexts/building-contexts/buildingForm";
import AsideBox from "../../components/AsideBox";
import buildingBackground from "@images/workshop3.webp";
import drawerImg from "@images/drawer.webp";
import SecretText from "@components/SecretText";
import ResolveLevel from "./building-mode-components/ResolveLevel";
import { customCommonContext } from "@contexts/building-contexts/customCommonContext";

const Building = () => {
  const [open, setOpen] = useState(false);
  const { styled } = useContext(customCommonContext);

  return (
    <BuildingProvider>
      <RestrictionProvider>
        <div className="wrapper-building">
          <div className="building">
            {open ? <SecretText text="buildingInfo" func={setOpen} /> : ""}
            <BuildingForm />
            {styled ? <ResolveLevel /> : <></>}
            <BuildingArea />
          </div>
          <AsideBox background={buildingBackground} cssClass="workshop">
            <div
              className="drawer drawer-one"
              style={{ backgroundImage: `url(${drawerImg})` }}
              onClick={() => setOpen(!open)}
            ></div>
          </AsideBox>
        </div>
      </RestrictionProvider>
    </BuildingProvider>
  );
};

export default Building;
