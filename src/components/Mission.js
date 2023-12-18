import React, { useState } from "react";
import CssFormCopy from "./CssForm";
import PlayGround from "./PlayGround";
import { BridgeStyleProvider, CrossoverStyleProvider, EmojiProvider, LevelProvider, ResultProvider } from "../contexts/FormContext";
import LevelSelect from "./LevelSelect";
import EmptyBox from "./EmptyBox";

const Mission = () => {
    const [nextClass, setNextClass] = useState()
    return(
        <CrossoverStyleProvider >
        <BridgeStyleProvider>
        <EmojiProvider>
        <ResultProvider>
        <LevelProvider>
        <div className="container-mission">
            <div className="box__classes">
                <CssFormCopy name="bridge"/>
                {
                    nextClass ? <CssFormCopy name="crossover" state={nextClass} func={setNextClass} /> : <EmptyBox state={nextClass} func={setNextClass}/>
                }
            </div>
            <PlayGround/>
            <LevelSelect />
        </div>
        </LevelProvider>
        </ResultProvider>
        </EmojiProvider>
        </BridgeStyleProvider>
        </CrossoverStyleProvider>
    )
}

export default Mission