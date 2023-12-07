import React, { useContext, useEffect, useState } from "react";
import masterImg from '../styles/images/master.webp'
import { EmojiContext } from "../contexts/FormContext";


const MasterCharacter = () => {
    const {position, setPosition, specialClass} = useContext(EmojiContext)

    const emojiPosition = {
        transform: `translateX(${position})`,
        //transform: `rotate(720deg)`,
        transition: '5s'
    }

    return (
        <img src={masterImg} alt="" className={`emoji-character ${specialClass}`} style={emojiPosition}/>
    )
}


export default MasterCharacter