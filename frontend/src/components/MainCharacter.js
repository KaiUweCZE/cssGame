import React, { useContext} from "react";
import masterImg from '../styles/images/main-character.webp'
import { EmojiContext } from "../contexts/FormContext";


const MainCharacter = () => {
    const {position, setPosition, specialClass} = useContext(EmojiContext)

    /*const emojiPosition = {
        transform: `translateX(${position})`,
        transition: '5s'
    }*/

    return (
        <img src={masterImg} alt="" className={`emoji-character ${specialClass}`} /*style={emojiPosition}*//>
    )
}


export default MainCharacter