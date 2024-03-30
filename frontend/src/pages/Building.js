import React, { useState } from "react";
import "../styles/buildingStyles.css";
import BuildingArea from "../components/buildingMode/BuildingArea";
import BuildingForm from "../components/buildingMode/BuildingForm";
import {
  BuildingProvider,
  RestrictionProvider,
} from "../contexts/BuildingContexts";
import AsideBox from "../components/AsideBox";
import buildingBackground from "../styles/images/workshop3.webp";
import drawerImg from "../styles/images/drawer.webp";
import { UserContextProvider } from "../contexts/UserContext";
import SecretText from "../components/SecretText";

const Building = () => {
  const [open, setOpen] = useState(false);
  return (
    <BuildingProvider>
      <RestrictionProvider>
        <UserContextProvider>
          <div className="wrapper-building">
            <div className="Building">
              {open ? <SecretText text="nothing" func={setOpen} /> : ""}
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
