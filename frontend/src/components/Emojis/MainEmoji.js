import React, { useContext, useEffect, useState} from "react";
import { masterImg } from "../../data/ImagesData";
import { EmojiContext } from "../../contexts/FormContext";
import EmojiMessage from "./EmojiMessage";
import { useMessageCounter } from "../../Functions/MessageCounter";

const MainEmoji = (props) => {
    const i = props.messageAction ? useMessageCounter(props.step, props.messageAction) : 0
    const { specialClass } = useContext(EmojiContext)
    const showMessage = props.messageAction ? props.messageAction.includes(props.step) : false;
    const messageText = props.messageAction ? props.text[i-1] : 0;

    return (
        <>
        {
            props.intro ? 
            <div className="box-emoji">
                <img src={masterImg} alt="" className={props?.intro ? `emoji-character ${props.cssClass}` : `emoji-character ${specialClass}`}/>
                {showMessage && <EmojiMessage text={messageText} />}
            </div> :
            <>
                <img src={masterImg} alt="" className={props?.intro ? `emoji-character ${props.cssClass}` : `emoji-character ${specialClass}`}/>
                <EmojiMessage text={props.text} />
            </>
        }
        </>
    )
}


export default MainEmoji