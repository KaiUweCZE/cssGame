import React from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { EmojiProvider, ResultProvider, StyleProvider } from "../contexts/FormContext";

const Mission = () => {

    return(
        <StyleProvider>
        <EmojiProvider>
        <ResultProvider>
        <div className="container-mission">
            <CssForm/>
            <PlayGround/>
        </div>
        </ResultProvider>
        </EmojiProvider>
        </StyleProvider>
    )
}

export default Mission