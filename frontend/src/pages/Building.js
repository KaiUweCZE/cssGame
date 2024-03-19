import React from "react";
import "../styles/buildingStyles.css";
import BuildingArea from "../components/buildingMode/BuildingArea";
import BuildingForm from "../components/buildingMode/BuildingForm";
import { BuildingProvider } from "../contexts/BuildingContexts";

const Building = () => {
  return (
    <BuildingProvider>
      <div className="Building">
        <BuildingForm />
        <BuildingArea />
      </div>
    </BuildingProvider>
  );
};

export default Building;
