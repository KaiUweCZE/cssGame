import React from "react";

const AboutClassInfo = (props) => {

    return(
        <article className="about-class__article">
            {Object.entries(props.information).map(([key, value]) => {
                return(
                    <li>{key}: {value}</li>
                )
                })}
        </article>
    )
}

export default AboutClassInfo