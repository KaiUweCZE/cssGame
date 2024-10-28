import React from "react";
import { useParams } from "react-router-dom";
import { aboutLevelData } from "./data/AboutLevelData";
import MainLevel from "./academy-components/MainLevel";
import VideoSectionLevel from "./academy-components/VideoSectionLevel";
import TipSectionLevel from "./academy-components/TipSectionLevel";
import "./academy-styles.css";
import { AcademyProvider } from "./context/AcademyContext";

const LevelInfo = () => {
  const { id } = useParams();

  const data = aboutLevelData.find((level) => level.id === Number(id));

  return (
    <AcademyProvider>
      <div className="container-level">
        <MainLevel levelName={data.id} data={data.main} />

        <VideoSectionLevel data={data} />

        <TipSectionLevel data={data} />
      </div>
    </AcademyProvider>
  );
};

export default LevelInfo;
