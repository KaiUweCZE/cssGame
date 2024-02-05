import React from "react";

const AboutClassInfo = (props) => {
    let index = 0
    return(
        <article className="about-class__article">
            {Object.entries(props.information).map(([key, value]) => {
                index += 1
                return(
                    <li key={index}>{key}: {value}</li>
                )
                })}
        </article>
    )
}

export default AboutClassInfo