import React, { createContext, useState, useRef, useEffect, useContext } from "react";


// to setting the result style of a given level
export const BridgeContext = createContext(null);

export const BridgeProvider = ({ children }) => {
    const [propertiesBridge, setPropertiesBridge] = useState([""]);
    const [valuesBridge, setValuesBridge] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    const handleAddInput = () => {
        if (propertiesBridge.length >= 3) {
            setPropertiesBridge([...propertiesBridge, ""]);
            setValuesBridge([...valuesBridge, ""]);
            setStopAdd(true)
            console.log("Done!");
        } else if (!stopAdd) {
            setPropertiesBridge([...propertiesBridge, ""]);
            setValuesBridge([...valuesBridge, ""]);
        }
    };

    const handleRemoveInput = index => {
        if (propertiesBridge.length === 1) {
            console.log("další prvky nelze odebrat");
        } else {
            const filteredProperties = propertiesBridge.filter((_, i) => i !== index);
            setPropertiesBridge(filteredProperties);
            const filteredValues = valuesBridge.filter((_, i) => i !== index);
            setValuesBridge(filteredValues);
            setStopAdd(false)
        }

    };

    const contextValue = {
        propertiesBridge,
        valuesBridge,
        setPropertiesBridge,
        setValuesBridge,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
    };

    return (
        <BridgeContext.Provider value={contextValue}>
            {children}
        </BridgeContext.Provider>
    );
};

export const ContainerContext = createContext(null);

export const ContainerProvider = ({ children }) => {
    const [propertiesContainer, setPropertiesContainer] = useState([""]);
    const [valuesContainer, setValuesContainer] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    const handleAddInput = () => {
        if (propertiesContainer.length >= 3) {
            setPropertiesContainer([...propertiesContainer, ""]);
            setValuesContainer([...valuesContainer, ""]);
            setStopAdd(true)
            console.log("Done!");
        } else if (!stopAdd) {
            setPropertiesContainer([...propertiesContainer, ""]);
            setValuesContainer([...valuesContainer, ""]);
        }
    };

    const handleRemoveInput = index => {
        if (propertiesContainer.length === 1) {
            console.log("další prvky nelze odebrat");
        } else {
            const filteredProperties = propertiesContainer.filter((_, i) => i !== index);
            setPropertiesContainer(filteredProperties);
            const filteredValues = valuesContainer.filter((_, i) => i !== index);
            setValuesContainer(filteredValues);
            setStopAdd(false)
        }

    };

    const contextValue = {
        propertiesContainer,
        valuesContainer,
        setPropertiesContainer,
        setValuesContainer,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
    };

    return (
        <ContainerContext.Provider value={contextValue}>
            {children}
        </ContainerContext.Provider>
    )
}


// for emoji character manipulation
export const EmojiContext = createContext({
    position: 0,
    specialClass: "",
    setPosition: () => { },
    setSpecialClass: () => { }
})

export const EmojiProvider = ({ children }) => {
    const [position, setPosition] = useState(0)
    const [specialClass, setSpecialClass] = useState("")

    const contextValue = {
        position,
        specialClass,
        setPosition,
        setSpecialClass
    }

    return (
        <EmojiContext.Provider value={contextValue}>
            {children}
        </EmojiContext.Provider>
    )
}

// Result evaluation
export const ResultContext = createContext({
    isCorrect: "",
    setIsCorrect: () => { },
    resultText: "",
    setResultText: () => { },
    checkpointRef: [],
    bridgeRef: [],
    checkBridgePosition: () => { }
})

export const ResultProvider = ({ children }) => {
    const [isCorrect, setIsCorrect] = useState(false)
    const [resultText, setResultText] = useState("")
    const checkpointRef = useRef([])
    const bridgeRef = useRef([])
    //const { level } = useContext(LevelContext)
    //const { valuesContainer, setValuesContainer } = useContext(ContainerContext)

    const addToCheckpointRef = (element) => {
        if (element && !checkpointRef.current.includes(element)) {
            checkpointRef.current.push(element);
        }
    };

    const addToBridgeRef = (element) => {
        if (element && !bridgeRef.current.includes(element)) {
            bridgeRef.current.push(element);
        }
    };

    // the position of the part of bridge is compared with the position of the auxilliary
    // element, which is set at the correct location
    const checkBridgePosition = () => {
        const tolerance = 5;
        bridgeRef.current.forEach((bridgeEl) => {
            const bridgePosition = bridgeEl.getBoundingClientRect()
            console.log("jednotlivé pozice: ", bridgePosition);
            const isCorrectPosition = checkpointRef.current.some((checkEl) => {
                const checkpointPosition = checkEl.getBoundingClientRect()
                console.log("další pozice: ", checkpointPosition);
                return (
                    Math.abs(bridgePosition.left - checkpointPosition.left) < tolerance &&
                    Math.abs(bridgePosition.right - checkpointPosition.right) < tolerance &&
                    Math.abs(bridgePosition.top - checkpointPosition.top) < tolerance
                    //bridgePosition.bottom == checkpointPosition.bottom
                );
            })
            setIsCorrect(isCorrectPosition)

        })

        // set a tolerance of 5px for the result
        //console.log("bridge: ", bridgePosition, "checkpoint:", checkpointPosition);
    }

    const contextValue = {
        isCorrect,
        setIsCorrect,
        resultText,
        setResultText,
        checkpointRef,
        addToCheckpointRef,
        addToBridgeRef,
        bridgeRef,
        checkBridgePosition
    }

    return (
        <ResultContext.Provider value={contextValue}>
            {children}
        </ResultContext.Provider>
    )
}

// for selecting and setting basic parameters of a given level
export const LevelContext = createContext({
    style: {},
    setStyle: () => { },
    setLevel: () => { }
})

export const LevelProvider = ({ children }) => {
    const [style, setStyle] = useState({ container: "", bridge: "", partOfBridge: "" })
    const [level, setLevel] = useState(() => {
        const savedLevel = localStorage.getItem('level');
        return savedLevel ? JSON.parse(savedLevel) : { partOfBridge: 1 };
    });

    useEffect(() => {
        const savedLevel = localStorage.getItem('level')
        if (savedLevel) {
            const levelObject = JSON.parse(savedLevel)
            setLevel(levelObject)
            const containerStyle = levelObject.containerStyles
            const bridgeStyle = levelObject.bridgeStyles
            const partStyle = levelObject.partOfBridgeStyles
            setStyle({ container: containerStyle, bridge: bridgeStyle, partOfBridge: partStyle })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('level', JSON.stringify(level))
    }, [level])

    const contextValue = {
        style,
        level,
        setStyle,
        setLevel
    }

    return (
        <LevelContext.Provider value={contextValue}>
            {children}
        </LevelContext.Provider>
    )
}

export const CheckContext = createContext({
    active: false,
    setActive: () => { }
})

export const CheckContextProvider = ({ children }) => {
    const [active, setActive] = useState(false)
    const [aboutClass, setAboutClass] = useState("")

    const contextValue = {
        active,
        setActive,
        aboutClass,
        setAboutClass
    }

    return (
        <CheckContext.Provider value={contextValue}>
            {children}
        </CheckContext.Provider>
    )
}