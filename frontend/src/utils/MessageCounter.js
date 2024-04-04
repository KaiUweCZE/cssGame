import React, {useState, useEffect} from "react";


export const useMessageCounter = (steps, actionArray) => {
    const [i, setI] = useState(0)

    useEffect(() => {
        if (actionArray.includes(steps)) {
            setI(prevI => prevI + 1)
        }
    }, [steps])

    return i
}