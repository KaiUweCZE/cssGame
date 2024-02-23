import React, { useContext, useState } from "react";
import CssForm from "./CssForm";
import PlayGround from "./PlayGround";
import { BridgeProvider, CheckContextProvider, ContainerProvider, EmojiProvider, LevelContext, LevelProvider, PartsProvider, ResultProvider } from "../contexts/FormContext";
import EmptyBox from "./EmptyBox";
import Clouds from "./Clouds";


const Mission = () => {
    const [containerClass, setContainerClass] = useState()
    const [partsClass, setPartsClass] = useState()
    const {level} = useContext(LevelContext)

    return(
        <CheckContextProvider>
        <ContainerProvider >
        <BridgeProvider>
        <EmojiProvider>
        <ResultProvider>
        <PartsProvider>
        <div className="container-mission">
            <Clouds />
            <div className="box__classes">
                <CssForm name="bridge"/>
                {
                    containerClass ? <CssForm name="container" state={containerClass} func={setContainerClass} /> : <EmptyBox state={containerClass} func={setContainerClass}/>
                }
                {
                    level?.partsStyle ? ( partsClass ?
                    <CssForm name="parts" state={partsClass} func={setPartsClass} /> 
                    : <EmptyBox state={partsClass} func={setPartsClass}/>
                    )
                   : <></>
                }
            </div>
            <PlayGround/>
        </div>
        </PartsProvider>
        </ResultProvider>
        </EmojiProvider>
        </BridgeProvider>
        </ContainerProvider>
        </CheckContextProvider>
    )
}

export default Mission