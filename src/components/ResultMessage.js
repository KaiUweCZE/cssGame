import React from "react";


const ResultMessage = (props) => {

    return(
        <h2 className={props.text === "Congrats" ? "message-result win" : "message-result lost"}>{props.text}</h2>
    )
}


export default ResultMessage