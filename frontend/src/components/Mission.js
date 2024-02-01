import React, { useState } from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { BridgeProvider, CheckContextProvider, ContainerProvider, EmojiProvider, LevelProvider, ResultProvider } from "../contexts/FormContext";
import LevelSelect from "./LevelSelect";
import EmptyBox from "./EmptyBox";

const Mission = () => {
    const [nextClass, setNextClass] = useState()
    return(
        <CheckContextProvider>
        <ContainerProvider >
        <BridgeProvider>
        <EmojiProvider>
        <ResultProvider>
        <div className="container-mission">
            <div className="box__classes">
                <CssForm name="bridge"/>
                {
                    nextClass ? <CssForm name="crossover" state={nextClass} func={setNextClass} /> : <EmptyBox state={nextClass} func={setNextClass}/>
                }
            </div>
            <PlayGround/>
        </div>
        </ResultProvider>
        </EmojiProvider>
        </BridgeProvider>
        </ContainerProvider>
        </CheckContextProvider>
    )
}

export default Mission