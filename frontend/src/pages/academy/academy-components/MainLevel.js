import React from "react";
import { hashtagIcon } from "@/data/imagesData";
import AcademyExercise from "./AcademyExercise";
import TipSection from "./TipSection";
import ErrorPage from "@/components/errors/ErrorPage";

const MainLevel = ({ levelName, data }) => {
  const { description, li, tip, videoSection } = data;

  console.log({
    "check data": levelName,
    "IF LEVEL IS BIGGER THAN 2 LOLOLOLOL!!!! EDIT DATA!!!": levelName,
  });

  if (!description || !li || !tip || !videoSection || !data || levelName > 2) {
    return <ErrorPage />;
  }
  return (
    <main className="level-main">
      <h2 className="main-headline">level {levelName}</h2>
      <section className="main-layout">
        <div className="main-layout-left">
          <p>{description ?? "no description"}</p>
          <ul className="main-list">
            {li?.map((li, index) => (
              <li key={index}>
                <div className="headline-box">
                  <img
                    src={hashtagIcon}
                    alt="hash tag icon"
                    width={16}
                    height={16}
                  />
                  <h3>{li.headline}</h3>
                </div>
                <p>{li.p}</p>
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
