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
  const { styled, setStyled } = useContext(customCommonContext);

  return (
    <BuildingProvider>
      <RestrictionProvider>
        <div
          className="wrapper-building"
          role="main"
          aria-label="Building mode workspace"
        >
          <div
            className="building"
            role="region"
            aria-label="Building area and controls"
          >
            {open ? <SecretText text="buildingInfo" func={setOpen} /> : ""}
            <BuildingForm />
            {styled ? <ResolveLevel setStyled={setStyled} /> : <></>}
            <BuildingArea />
          </div>
          <AsideBox background={buildingBackground} cssClass="workshop">
            <div
              className="drawer drawer-one"
              style={{ backgroundImage: `url(${drawerImg})` }}
              onClick={() => setOpen(!open)}
              role="button"
              aria-label="Toggle building information"
              aria-expanded={open}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpen(!open);
                } else if (e.key === "Escape") {
                  setOpen(false);
                }
              }}
            ></div>
          </AsideBox>
        </div>
      </RestrictionProvider>
    </BuildingProvider>
  );
};

export default Building;
