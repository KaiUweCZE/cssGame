import React, { useState } from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { BridgeStyleProvider, CheckContextProvider, CrossoverStyleProvider, EmojiProvider, LevelProvider, ResultProvider } from "../contexts/FormContext";
import LevelSelect from "./LevelSelect";
import EmptyBox from "./EmptyBox";

const Mission = () => {
    const [nextClass, setNextClass] = useState()
    return(
        <CheckContextProvider>
        <CrossoverStyleProvider >
        <BridgeStyleProvider>
        <EmojiProvider>
        <ResultProvider>
        <LevelProvider>
        <div className="container-mission">
            <div className="box__classes">
                <CssForm name="bridge"/>
                {
                    nextClass ? <CssForm name="crossover" state={nextClass} func={setNextClass} /> : <EmptyBox state={nextClass} func={setNextClass}/>
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
        </CheckContextProvider>
    )
}

export default Mission