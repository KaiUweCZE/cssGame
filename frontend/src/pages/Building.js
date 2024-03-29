import React from "react";
import "../styles/buildingStyles.css";
import BuildingArea from "../components/buildingMode/BuildingArea";
import BuildingForm from "../components/buildingMode/BuildingForm";
import {
  BuildingProvider,
  RestrictionProvider,
} from "../contexts/BuildingContexts";

const Building = () => {
  return (
    <BuildingProvider>
      <RestrictionProvider>
        <div className="Building">
          <BuildingForm />
          <BuildingArea />
        </div>
      </RestrictionProvider>
    </BuildingProvider>
  );
};

export default Building;
