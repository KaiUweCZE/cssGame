import React, { useContext} from "react";
import masterImg from '../styles/images/main-character.webp'
import { EmojiContext } from "../contexts/FormContext";


const MainEmoji = () => {
    const { specialClass } = useContext(EmojiContext)


    return (
        <img src={masterImg} alt="" className={`emoji-character ${specialClass}`} /*style={emojiPosition}*//>
    )
}


export default MainEmoji