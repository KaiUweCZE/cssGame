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
        <div id="b2d" className={`emoji-character ${specialClass}`} style={emojiPosition}>
            <img src={masterImg} alt=""/>
        </div>
    )
}


export default MasterCharacter