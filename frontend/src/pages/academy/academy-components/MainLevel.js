import React, { useContext } from "react";
import AcademyExercise from "./AcademyExercise";
import TipSection from "./TipSection";
import ErrorPage from "@/components/errors/ErrorPage";
import { RenderContent } from "./RenderContent";
import { AcademyContext } from "../context/AcademyContext";
import { exercises } from "../data/exercises-settings";

const MainLevel = ({ module, levelName, data }) => {
  const { description, li, tip, videoSection } = data;
  const exerciseData = exercises.find((e) => e.id === levelName);
  const { setEditablePart } = useContext(AcademyContext);

  setEditablePart(exerciseData.editablePart);

  if (!description || !li || !tip || !videoSection || !data || levelName > 5) {
    return <ErrorPage />;
  }

  return (
    <main className="academy-level-main">
      <h2 className="academy-main-headline">{module}</h2>
      <section className="academy-main-layout">
        <div className="academy-main-layout-left">
          <p>{description ?? "no description"}</p>
          <ul className="academy-main-list">
            {li?.map((item, index) => (
              <li key={index} className="academy-content-item">
                <div className="academy-headline-box">
                  <h3>{item.headline}</h3>
                </div>
                <div className="academy-content-wrapper">
                  <RenderContent content={item.blocks} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <AcademyExercise level={levelName} />
      </section>
      <TipSection tip={tip} video={videoSection} />
    </main>
  );
};

export default MainLevel;
