import React, { createContext, useState, useRef, useEffect, useContext } from "react";
import { contextValues } from "../Functions/cssFormFunctions";


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

    const closeForm = () => {
        setPropertiesBridge([])
        setValuesBridge([])
    }

    const contextValue = {
        propertiesBridge,
        valuesBridge,
        setPropertiesBridge,
        setValuesBridge,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
        closeForm
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

    const closeForm = () => {
        setPropertiesContainer([""])
        setValuesContainer([""])
        setStopAdd(false)
    }

    const contextValue = {
        propertiesContainer,
        valuesContainer,
        setPropertiesContainer,
        setValuesContainer,
        stopAdd,
        handleAddInput,
        handleRemoveInput,
        closeForm
    };

    return (
        <ContainerContext.Provider value={contextValue}>
            {children}
        </ContainerContext.Provider>
    )
}

export const PartsContext = createContext({})

export const PartsProvider = ({children}) => {
    const [stopAdd, setStopAdd] = useState(false);

    const closeForm = () => {
        setStopAdd(false)
    }

    const contextValue = {
        closeForm
    }    
        
    return(
        <PartsContext.Provider value={contextValue}>
            {children}
        </PartsContext.Provider>
    )
}

// for emoji character manipulation
export const EmojiContext = createContext({
    specialClass: "",
    setSpecialClass: () => { }
})

export const EmojiProvider = ({ children }) => {
    const [specialClass, setSpecialClass] = useState("")

    const handleEmojiClass = (correct, levelSpecifics) => {
        
        if(correct && levelSpecifics){
            setSpecialClass(levelSpecifics)
        } else if(correct){
            setSpecialClass("true")
        }else{
            setSpecialClass("false")
        }
    }

    const contextValue = {
        specialClass,
        setSpecialClass,
        handleEmojiClass
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
        let correctPositions = 0;
    
        // Assuming bridgeRef and checkpointRef are arrays of equal length
        for (let i = 0; i < bridgeRef.current.length; i++) {
            const bridgeRect = bridgeRef.current[i].getBoundingClientRect();
            console.log("first cyklus start", checkpointRef.current.length);
            for (let j = 0; j < checkpointRef.current.length; j++) {
                const checkRect = checkpointRef.current[j].getBoundingClientRect();
                console.log(checkRect.left, checkRect.right, checkRect.top);
                const isLeftCorrect = Math.abs(bridgeRect.left - checkRect.left) < tolerance;
                const isRightCorrect = Math.abs(bridgeRect.right - checkRect.right) < tolerance;
                const isTopCorrect = Math.abs(bridgeRect.top - checkRect.top) < tolerance;
                console.log("second cyklus");
                console.log(`Bridge ${j}: Left ${isLeftCorrect ? 'OK' : 'NO'}, Right ${isRightCorrect ? 'OK' : 'NO'}, Top ${isTopCorrect ? 'OK' : 'NO'}`);
                if (isLeftCorrect && isRightCorrect && isTopCorrect) {
                    correctPositions += 1;
                } else {
                    // If any position is not correct, no need to check further
                    setIsCorrect(false);
                }
                // Log the positions and whether they are correct
            }
        }
    
        // If all positions are correct
        if (correctPositions === bridgeRef.current.length) {
            console.log("All positions are correct!");
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
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