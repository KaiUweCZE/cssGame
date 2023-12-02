import React, {createContext, useState} from "react";


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