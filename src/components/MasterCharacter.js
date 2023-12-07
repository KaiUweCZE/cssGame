import React, { useContext} from "react";
import masterImg from '../styles/images/master.webp'
import { EmojiContext } from "../contexts/FormContext";


const MasterCharacter = () => {
    const {position, setPosition, specialClass} = useContext(EmojiContext)

    /*const emojiPosition = {
        transform: `translateX(${position})`,
        transition: '5s'
    }*/

    return (
        <img src={masterImg} alt="" className={`emoji-character ${specialClass}`} /*style={emojiPosition}*//>
    )
}


export default MasterCharacter