import React from "react";
import leftBracket from '../styles/images/left-bracket.svg'
import rightBracket from '../styles/images/right-bracket.svg'


const CssForm = () => {

    return(
        <div className="container-form">
            <span className="element-class">.bridge</span>
            <img className="left-bracket" src={leftBracket} alt="" />
            <form className="element-class__bridge" action="">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
            </form>
            <img className="right-bracket" src={rightBracket} alt="" />
        </div>
    )
}

export default CssForm