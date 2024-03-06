import React, { useContext} from "react";
import { masterImg } from "../data/ImagesData";
import { EmojiContext } from "../contexts/FormContext";
import EmojiMessage from "./Intro/EmojiMessage";
import { emojiData } from "../data/EmojiData";


const MainEmoji = (props) => {
    const data = emojiData.find(e => e.name === 'main')
    const { specialClass } = useContext(EmojiContext)
    console.log(props.step);

    return (
        <>
        {
            props.intro ? 
            <div className="box-emoji">
                <img src={masterImg} alt="" className={props?.intro ? `emoji-character ${props.cssClass}` : `emoji-character ${specialClass}`}/>
                <EmojiMessage data={data} step={props.step} text='intro' />
            </div> :
            <>
            <img src={masterImg} alt="" className={props?.intro ? `emoji-character ${props.cssClass}` : `emoji-character ${specialClass}`}/>
            <EmojiMessage data={data} step={props.step} text='intro' />
            </>
        }
        </>
    )
}


export default MainEmoji