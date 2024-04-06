import React, { useState } from "react";
import "@styles/building-styles.css";
import BuildingArea from "@pages/building-mode/building-mode-components/BuildingArea";
import BuildingForm from "@pages/building-mode/building-mode-components/BuildingForm";
import { RestrictionProvider } from "@contexts/building-contexts/restrictionContext";
import { BuildingProvider } from "@contexts/building-contexts/buildingForm";
import AsideBox from "../../components/AsideBox";
import buildingBackground from "@images/workshop3.webp";
import drawerImg from "@images/drawer.webp";
import { UserContextProvider } from "@contexts/UserContext";
import SecretText from "@components/SecretText";

const Building = () => {
  const [open, setOpen] = useState(false);
  return (
    <BuildingProvider>
      <RestrictionProvider>
        <UserContextProvider>
          <div className="wrapper-building">
            <div className="Building">
              {open ? <SecretText text="buildingInfo" func={setOpen} /> : ""}
              <BuildingForm />
              <BuildingArea />
            </div>
            <AsideBox background={buildingBackground} cssClass="workshop">
              <div
                className="drawer drawerOne"
                style={{ backgroundImage: `url(${drawerImg})` }}
                onClick={() => setOpen(!open)}
              ></div>
            </AsideBox>
          </div>
        </UserContextProvider>
      </RestrictionProvider>
    </BuildingProvider>
  );
};

export default Building;