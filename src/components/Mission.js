import React from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { EmojiProvider, StyleProvider } from "../contexts/FormContext";

const Mission = () => {

    return(
        <StyleProvider>
            <EmojiProvider>
            <div className="container-mission">
                <CssForm/>
                <PlayGround/>
            </div>
            </EmojiProvider>
        </StyleProvider>
    )
}

export default Mission