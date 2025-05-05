import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { aboutLevelData } from "./data/about-level-data";
import MainLevel from "./academy-components/MainLevel";
import "./academy-styles.css";
import { AcademyProvider } from "./context/AcademyContext";
import { UserContext } from "@/contexts/UserContext";

const LevelInfo = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const data = aboutLevelData.find((level) => level.id === Number(id));

  if (!data || !user) {
    return <Navigate to="/academy" replace />;
  }

  const getCategoryNumber = () => {
    if (user.level >= 17) return 4;
    if (user.level >= 11) return 3;
    if (user.level >= 5) return 2;
    return 1;
  };

  const categoryNumber = getCategoryNumber();

  if (categoryNumber < data.id) {
    return <Navigate to="/academy" replace />;
  }

  return (
    <AcademyProvider>
      <div className="container-level">
        <MainLevel levelName={data.id} module={data.name} data={data.main} />
      </div>
    </AcademyProvider>
  );
};

export default LevelInfo;
