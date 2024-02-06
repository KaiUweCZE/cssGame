import React, { useContext } from "react";
import { aboutLevelData } from "../data/LevelInfo";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

//I need to try subgrid
const About = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    const toClass = (i) => {
        navigate(`/level/${i}`)
    }

    return(
        <div className="container-about">
            {
            aboutLevelData.map((level) => {
                return(
                <>
                   {
                        user.level + 1 < level.id ?
                        <article className="low-level" key={level.id}>
                            <h2>Your level is too low {level.id}</h2>
                        </article>
                        :
                        <article key={level.id}>
                            <h2>level {level.id}</h2>
                            <p>{level.introduction}</p>
                            <button onClick={() => toClass(level.id)}>more</button>
                        </article>
                    } 
                </>
                )
                })
            }
        </div>
    )
}

export default About