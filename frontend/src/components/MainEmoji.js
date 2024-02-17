import React, { useContext} from "react";
import { masterImg } from "../data/images";
import { EmojiContext } from "../contexts/FormContext";


const MainEmoji = () => {
    const { specialClass } = useContext(EmojiContext)

    return (
        <img src={masterImg} alt="" className={`emoji-character ${specialClass}`}/>
    )
}


export default MainEmoji