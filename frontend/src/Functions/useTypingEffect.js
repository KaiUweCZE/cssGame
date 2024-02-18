import {useEffect, useState} from "react";

export const useTypingEffect = (text, miliseconds) => {
    const [position, setPosition] = useState(0)
    let i = 0
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition((value) => value + 1)
            i++;
            if (i > text.length) {
                clearInterval(intervalId)
            }
        }, miliseconds);
        return () => {
            clearInterval(intervalId)
            i = 0
            setPosition(0)
        }
       
    }, [miliseconds, text.length])

    return text.substring(0, position)
}