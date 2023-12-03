import React, {createContext, useState, useRef, useEffect} from "react";


export const StyleContext = createContext({
    property: "",
    value: "",
    setProperty: () => {},
    setPropertyValue: () => {}
});


export const StyleProvider = ({children}) => {
    const [property, setProperty] = useState("")
    const [propertyValue, setPropertyValue] = useState("")

    const contextValue = {
        property,
        propertyValue,
        setProperty,
        setPropertyValue
    };

    return(
        <StyleContext.Provider value={contextValue}>
            {children}
        </StyleContext.Provider>
    )
}


export const EmojiContext = createContext({
    position: 0,
    specialClass: "",
    setPosition: () => {},
    setSpecialClass: () => {}
})

export const EmojiProvider = ({children}) => {
    const [position, setPosition] = useState(0)
    const [specialClass, setSpecialClass] = useState("")

    const contextValue = {
        position,
        specialClass,
        setPosition,
        setSpecialClass
    }

    return(
        <EmojiContext.Provider value={contextValue}>
            {children}
        </EmojiContext.Provider>
    )
}


export const ResultContext = createContext({
    isCorrect: "",
    setIsCorrect: () => {},
    checkpointRef: () => {},
    bridgeRef: () => {},
    checkBridgePosition: () => {}
})

export const ResultProvider = ({children}) => {
    const [isCorrect, setIsCorrect] = useState(false)
    const checkpointRef = useRef(null)
    const bridgeRef = useRef(null)

    const checkBridgePosition = () => {
        const checkpointPosition = checkpointRef.current.getBoundingClientRect();
        const bridgePosition = bridgeRef.current.getBoundingClientRect();

        const tolerance = 5;
        const isCorrectPosition = (
            Math.abs(bridgePosition.left - checkpointPosition.left) < tolerance &&
            Math.abs(bridgePosition.right - checkpointPosition.right) < tolerance &&
            Math.abs(bridgePosition.top - checkpointPosition.top) < tolerance
            //bridgePosition.bottom == checkpointPosition.bottom
        );

        setIsCorrect(isCorrectPosition)
    }

    useEffect(() => {
        if (isCorrect) {
            console.log("Congrats");
        } else {
            console.log("Total error");
        }
    }, [isCorrect])

    const contextValue = {
        isCorrect,
        setIsCorrect,
        checkpointRef,
        bridgeRef,
        checkBridgePosition
    }

    return(
        <ResultContext.Provider value={contextValue}>
            {children}
        </ResultContext.Provider>
    )
}