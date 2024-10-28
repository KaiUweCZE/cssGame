import React from "react";
import { hashtagIcon } from "@data/ImagesData";
import AcademyExercise from "./AcademyExercise";

const MainLevel = ({ levelName, data }) => {
  return (
    <main className="level-main">
      <h2>level {levelName}</h2>
      <div className="main-layout">
        <div className="main-layout-left">
          <p>{data.description ?? "popis není k dispozici"}</p>
          <ul>
            {data.li?.map((li, index) => (
              <li key={index}>
                <div>
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
        <AcademyExercise />
      </div>
    </main>
  );
};

export default MainLevel;
