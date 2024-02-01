import React from "react";

const AboutClass = (props) => {

    return(
        <ul className="checkClass">
            <h2>{props.name}</h2>
            {Object.entries(props.information).map(([key, value]) => {
                return(
                    <li>{key}: {value}</li>
                )
                })}
        </ul>
    )
}

export default AboutClass