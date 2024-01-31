import React from "react";
import lockIcon from '../styles/images/icons/lock.svg'

const RoadmapLevel = (props) => {

    return(
        <>
        {
        props.locked ?
        <figcaption className={`roadmap__item locked ${props.specialClass}`}>
            <img src={lockIcon} alt="" />
        </figcaption>
        :
        <div className={`roadmap__item ${props.specialClass}` } onClick={props.onClick}>
            <span>{props.num}</span>
        </div>
        }
        </>
    )
}

export default RoadmapLevel