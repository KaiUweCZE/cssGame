import React from "react";
import { useParams } from "react-router-dom";
import { aboutLevelData } from "../data/LevelInfo";

const ClassInfo = () => {
    const {id} = useParams()
    const data = aboutLevelData.find(level => level.id === Number(id))
    
    return(
        <>
        <h2>level {data.id}</h2>
        <p>{data.introduction}</p>
        </>
    )
}

export default ClassInfo