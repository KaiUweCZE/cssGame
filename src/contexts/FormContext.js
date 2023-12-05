import React, {createContext, useState, useRef, useEffect} from "react";


// to setting the result style of a given level
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

// for emoji character manipulation
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

// Result evaluation
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
    
    // the position of the bridhe is compared with the position of the auxilliary
    // element, which is set at the correct location
    const checkBridgePosition = () => {
        const checkpointPosition = checkpointRef.current.getBoundingClientRect();
        const bridgePosition = bridgeRef.current.getBoundingClientRect();

        // set a tolerance of 5px for the result
        const tolerance = 5;
        const isCorrectPosition = (
            Math.abs(bridgePosition.left - checkpointPosition.left) < tolerance &&
            Math.abs(bridgePosition.right - checkpointPosition.right) < tolerance &&
            Math.abs(bridgePosition.top - checkpointPosition.top) < tolerance
            //bridgePosition.bottom == checkpointPosition.bottom
        );

        setIsCorrect(isCorrectPosition)
    }

    // Auxiliary check
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

// for selecting and setting basic parameters of a given level
export const LevelContext = createContext({
    style:{},
    setStyle: () => {}
})

export const LevelProvider = ({children}) => {
    const [style, setStyle] = useState({})

    const contextValue = {
        style,
        setStyle
    }

    return(
        <LevelContext.Provider value={contextValue}>
            {children}
        </LevelContext.Provider>
    )
}