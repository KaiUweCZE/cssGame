import React, { createContext, useState, useRef, useEffect, useContext } from "react";
import { contextValues } from "../Functions/cssFormFunctions";


// to set styles for .bridge
export const BridgeContext = createContext(null);

export const BridgeProvider = ({ children }) => {
    const [propertiesBridge, setPropertiesBridge] = useState([""]);
    const [valuesBridge, setValuesBridge] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    // add next inputs in form
    const handleAddInput = () => {
        if (propertiesBridge.length >= 3) {
            setPropertiesBridge([...propertiesBridge, ""]);
            setValuesBridge([...valuesBridge, ""]);
            setStopAdd(true)
        } else if (!stopAdd) {
            setPropertiesBridge([...propertiesBridge, ""]);
            setValuesBridge([...valuesBridge, ""]);
        }
    };

    // remove input from form
    const handleRemoveInput = index => {
        if (propertiesBridge.length === 1) {
            console.log("you cannot remove another element");
        } else {
            const filteredProperties = propertiesBridge.filter((_, i) => i !== index);
            setPropertiesBridge(filteredProperties);
            const filteredValues = valuesBridge.filter((_, i) => i !== index);
            setValuesBridge(filteredValues);
            setStopAdd(false)
        }
    };

    // close additional form 
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

// to set styles for .container
export const ContainerContext = createContext(null);

export const ContainerProvider = ({ children }) => {
    const [propertiesContainer, setPropertiesContainer] = useState([""]);
    const [valuesContainer, setValuesContainer] = useState([""]);
    const [stopAdd, setStopAdd] = useState(false);

    // add next inputs in form
    const handleAddInput = () => {
        if (propertiesContainer.length >= 3) {
            setPropertiesContainer([...propertiesContainer, ""]);
            setValuesContainer([...valuesContainer, ""]);
            setStopAdd(true)
        } else if (!stopAdd) {
            setPropertiesContainer([...propertiesContainer, ""]);
            setValuesContainer([...valuesContainer, ""]);
        }
    };

    // remove input from form
    const handleRemoveInput = index => {
        if (propertiesContainer.length === 1) {
            console.log("you cannot remove another element");
        } else {
            const filteredProperties = propertiesContainer.filter((_, i) => i !== index);
            setPropertiesContainer(filteredProperties);
            const filteredValues = valuesContainer.filter((_, i) => i !== index);
            setValuesContainer(filteredValues);
            setStopAdd(false)
        }
    };

    // close additional form 
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


// for form parts alter PartsContext, each line is one part of the bridge
// compered to other forms where more styles can be set
export const PartsContext = createContext({})

export const PartsProvider = ({children}) => {
    const [stopAdd, setStopAdd] = useState(false);

    const [propertiesParts, setPropertiesParts] = useState([])
    const [valuesParts, setValuesParts] = useState([])

    const handleAddInput = () => {
        if (propertiesParts.length >= 2) {
            setPropertiesParts([...propertiesParts]);
            setValuesParts([...valuesParts]);
            setStopAdd(true)
        } else if (!stopAdd) {
            setPropertiesParts([...propertiesParts]);
            setValuesParts([...valuesParts]);
        }
    };

    const handleRemoveInput = index => {
        if (propertiesParts.length === 1) {
            console.log("You can not remove another element");
        } else {
            const filteredProperties = propertiesParts.filter((_, i) => i !== index);
            setPropertiesParts(filteredProperties);
            const filteredValues = valuesParts.filter((_, i) => i !== index);
            setValuesParts(filteredValues);
            setStopAdd(false)
        }
    };

    const closeForm = () => {
        setStopAdd(false)
    }

    const contextValue = {
        propertiesParts,
        valuesParts,
        setPropertiesParts,
        setValuesParts,
        handleAddInput,
        handleRemoveInput,
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
    //const [enemyAnimation, setEnemyAnimation] = useState("")

    /* depending on the result, the class for the 
    emoji component is set */
    const handleEmojiClass = (correct, levelSpecifics) => {
        /* levelSpecifics is an addition for some levels that need
        special animation */
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
        handleEmojiClass,
        //enemyAnimation,
        //setEnemyAnimation
    }

    return (
        <EmojiContext.Provider value={contextValue}>
            {children}
        </EmojiContext.Provider>
    )
}

// Result evaluation
export const ResultContext = createContext({
    isCorrectPosition: "",
    setIsCorrectPosition: () => { },
    resultText: "",
    setResultText: () => { },
    checkpointRef: [],
    bridgeRef: [],
    checkBridgePosition: () => { }
})

export const ResultProvider = ({ children }) => {
    const [isCorrectPosition, setIsCorrectPosition] = useState(false)
    const [resultText, setResultText] = useState("")
    const [checked, setChecked] = useState({check: false, result: false})
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
            for (let j = 0; j < checkpointRef.current.length; j++) {
                const checkRect = checkpointRef.current[j].getBoundingClientRect();
                const isLeftCorrect = Math.abs(bridgeRect.left - checkRect.left) < tolerance;
                const isRightCorrect = Math.abs(bridgeRect.right - checkRect.right) < tolerance;
                const isTopCorrect = Math.abs(bridgeRect.top - checkRect.top) < tolerance;
                if (isLeftCorrect && isRightCorrect && isTopCorrect) {
                    correctPositions += 1;
                } else {
                    // If any position is not correct, no need to check further
                    setIsCorrectPosition(false);
                }
            }
        }
    
        // If all positions are correct
        if (correctPositions === bridgeRef.current.length) {
            console.log("All positions are correct!");
            setIsCorrectPosition(true);
        } else {
            setChecked(() => ({check: true, result: false}))
            setIsCorrectPosition(false);
        }
    }


    const contextValue = {
        isCorrectPosition,
        setIsCorrectPosition,
        resultText,
        setResultText,
        checkpointRef,
        addToCheckpointRef,
        addToBridgeRef,
        bridgeRef,
        checkBridgePosition,
        checked,
        setChecked
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
            const partStyle = levelObject.partOfBridgeStyles?.childrenStyle
            setStyle({ container: containerStyle, bridge: bridgeStyle, parts: partStyle})
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

/*
Obtain data about .bridge & .container for AboutClassComponents
*/
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