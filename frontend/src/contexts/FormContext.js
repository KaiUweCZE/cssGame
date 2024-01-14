import React, {createContext, useState, useRef, useEffect} from "react";


// to setting the result style of a given level
export const BridgeStyleContext = createContext(null);

export const BridgeStyleProvider = ({ children }) => {
    const [properties, setProperties] = useState([""]);
    const [values, setValues] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    const handleAddInput = () => {
        if (properties.length >= 3) {
            setProperties([...properties, ""]);
            setValues([...values, ""]);
            setStopAdd(true)
            console.log("Done!");
        } else if(!stopAdd){
            setProperties([...properties, ""]);
            setValues([...values, ""]);
        }
    };

    const handleRemoveInput = index => {
        if (properties.length === 1) {
            console.log("další prvky nelze odebrat");
        } else{
            const filteredProperties = properties.filter((_, i) => i !== index);
            setProperties(filteredProperties);
            const filteredValues = values.filter((_, i) => i !== index);
            setValues(filteredValues);
            setStopAdd(false)
        }
        
    };

    const contextValue = {
        properties,
        values,
        setProperties,
        setValues,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
    };

    return (
        <BridgeStyleContext.Provider value={contextValue}>
            {children}
        </BridgeStyleContext.Provider>
    );
};

export const CrossoverStyleContext = createContext(null);

export const CrossoverStyleProvider = ({children}) => {
    const [properties, setProperties] = useState([""]);
    const [values, setValues] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    const handleAddInput = () => {
        if (properties.length >= 3) {
            setProperties([...properties, ""]);
            setValues([...values, ""]);
            setStopAdd(true)
            console.log("Done!");
        } else if(!stopAdd){
            setProperties([...properties, ""]);
            setValues([...values, ""]);
        }
    };

    const handleRemoveInput = index => {
        if (properties.length === 1) {
            console.log("další prvky nelze odebrat");
        } else{
            const filteredProperties = properties.filter((_, i) => i !== index);
            setProperties(filteredProperties);
            const filteredValues = values.filter((_, i) => i !== index);
            setValues(filteredValues);
            setStopAdd(false)
        }
        
    };

    const contextValue = {
        properties,
        values,
        setProperties,
        setValues,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
    };

    return(
        <CrossoverStyleContext.Provider value={contextValue}>
            {children}
        </CrossoverStyleContext.Provider>
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
    resultText: "",
    setResultText: () => {},
    checkpointRef: () => {},
    bridgeRef: () => {},
    checkBridgePosition: () => {}
})

export const ResultProvider = ({children}) => {
    const [isCorrect, setIsCorrect] = useState(false)
    const [resultText, setResultText] = useState("")
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
            //setResultText("Congrats")
            console.log("Congrats");
        } else {
            //setResultText("Oops")
            console.log("Total error");
        }
    }, [isCorrect])

    const contextValue = {
        isCorrect,
        setIsCorrect,
        resultText,
        setResultText,
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
    level: {partOfBridge : 1},
    style:{},
    setStyle: () => {},
    setLevel: () => {}
})

export const LevelProvider = ({children}) => {
    const [style, setStyle] = useState({})
    const [level, setLevel] = useState({partOfBridge : 1})
    
    /*useEffect(() => {
        
    }, [level])*/
    const contextValue = {
        style,
        level,
        setStyle,
        setLevel
    }

    return(
        <LevelContext.Provider value={contextValue}>
            {children}
        </LevelContext.Provider>
    )
}

export const CheckContext = createContext({
    active: false,
    setActive: () => {}
})

export const CheckContextProvider = ({children}) => {
    const [active, setActive] = useState(false)

    const contextValue = {
        active,
        setActive
    }

    return(
        <CheckContext.Provider value={contextValue}>
            {children}
        </CheckContext.Provider>
    )
}