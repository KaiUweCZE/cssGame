import React from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { EmojiProvider, LevelProvider, ResultProvider, StyleProvider } from "../contexts/FormContext";
import LevelSelect from "./LevelSelect";

const Mission = () => {

    return(
        <StyleProvider>
        <EmojiProvider>
        <ResultProvider>
        <LevelProvider>
        <div className="container-mission">
            <CssForm/>
            <PlayGround/>
            <LevelSelect />
        </div>
        </LevelProvider>
        </ResultProvider>
        </EmojiProvider>
        </StyleProvider>
    )
}

export default Mission