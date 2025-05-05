import React from "react";
import { hashtagIcon } from "@/data/imagesData";
import AcademyExercise from "./AcademyExercise";
import TipSection from "./TipSection";
import ErrorPage from "@/components/errors/ErrorPage";
import { RenderContent } from "./RenderContent";
import { HashIcon } from "lucide-react";

const MainLevel = ({ module, levelName, data }) => {
  const { description, li, tip, videoSection } = data;

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
                  {/* <img
                    src={hashtagIcon}
                    alt="hash tag icon"
                    width={16}
                    height={16}
                  /> 
                  <HashIcon color="#2a7d8aa5" size={16} />*/}
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
