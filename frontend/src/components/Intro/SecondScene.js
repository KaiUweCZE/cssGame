import React from "react";
import {enviromentImages, guideImg, masterImg} from '../../data/images'


const SecondScene = () => {

    return(
        <div className="container-welcome">
            <div className="box-welcome" style={{backgroundImage: `url(${enviromentImages.dirt})`}}>
            <div className='box-welcome__lawn' style={{backgroundImage: `url(${enviromentImages.lawn})`}}></div>
            </div>
            
        <img src={guideImg} className='emoji-character guide' alt="" />
        <img src={masterImg} className='emoji-character main' alt="" />
    </div>
    )
}

export default SecondScene