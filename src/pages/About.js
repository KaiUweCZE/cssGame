import React from "react";
import { levelData } from "../data/LevelData";

//I need to try subgrid
const About = () => {

    return(
        <div className="container-about">
            {
            levelData.map((level) => {
                return(
                    <article key={level.id}>
                        <h2>{level.name}</h2>
                        <p>{level.about}</p>
                        <button>více</button>
                    </article>
                )
            })
            }
        </div>
    )
}

export default About