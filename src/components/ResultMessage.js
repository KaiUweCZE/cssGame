import React, { useContext } from "react";
import { ResultContext } from "../contexts/FormContext";


const ResultMessage = () => {
    const{resultText} = useContext(ResultContext)
    return(
        <h2 className={resultText === "Congrats" ? "message-result win" : "message-result lost"}>{resultText}</h2>
    )
}


export default ResultMessage