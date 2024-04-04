import React from "react";
import { hashtagIcon } from "@data/ImagesData";

const MainLevel = ({ data }) => {
  let index = 0;
  return (
    <main>
      <h2>level {data.id}</h2>
      <p>{data.fullData.main.description ?? "popis není k dispozici"}</p>
      <ul>
        {data.fullData?.main?.li?.map((li) => {
          index += 1;
          return (
            <li key={index}>
              <div>
                <img src={hashtagIcon} alt="" />
                <h3>{li.headline}</h3>
              </div>
              <p>{li.p}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default MainLevel;
