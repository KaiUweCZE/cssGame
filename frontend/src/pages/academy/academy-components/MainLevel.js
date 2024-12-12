import React from "react";
import { hashtagIcon } from "@data/ImagesData";
import AcademyExercise from "./AcademyExercise";
import TipSection from "./TipSection";

const MainLevel = ({ levelName, data }) => {
  const { description, li, tip, videoSection } = data;
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
