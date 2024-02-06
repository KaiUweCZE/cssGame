import React from "react";
import { aboutLevelData } from "../data/LevelInfo";
import { useNavigate, useLocation } from "react-router-dom";

//I need to try subgrid
const About = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const toClass = (i) => {
        navigate(`/level/${i}`)
    }

    return(
        <div className="container-about">
            {
            aboutLevelData.map((level) => {
                return(
                    <article key={level.id}>
                        <h2>level name</h2>
                        <p>{level.introduction}</p>
                        <button onClick={() => toClass(level.id)}>více</button>
                    </article>
                )
            })
            }
        </div>
    )
}

export default About