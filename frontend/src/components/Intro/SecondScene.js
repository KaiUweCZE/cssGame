import React, { useState } from "react";
import {enviromentImages, nextIcon, guideImg, masterImg} from '../../data/ImagesData'
import EmojiMessage from "../Emojis/EmojiMessage";
import MainEmoji from "../Emojis/MainEmoji";
import GuideEmoji from "../Emojis/GuideEmoji";


const SecondScene = (props) => {
    const [step, setStep] = useState(0)

    const handleScene = () => {
        if (step < 3) {
            setStep(prev => prev + 1)
        } else {
            props.setScene('last')
        }
    }

    return(
        <div className="container-welcome">
            <div className="box-welcome" style={{backgroundImage: `url(${enviromentImages.dirt})`}}>
                <div className='box-welcome__lawn' style={{backgroundImage: `url(${enviromentImages.lawn})`}}></div>
                <img src={nextIcon} onClick={() => handleScene()} className="next"/>
            </div>
            <MainEmoji intro={true} step={step} cssClass='main' />
            <GuideEmoji step={step} />
        </div>
    )
}

export default SecondScene

/*
<img src={guideImg} className={ step >= 2 ? `emoji-character guide active` : `emoji-character guide`} alt="" />
<img src={masterImg} className='emoji-character main' alt="" />
*/