import { levelData } from "../data/LevelData";

export const styleChecker = (level, styles) => {
    
    console.log("styly jsou",styles);
    // Check if styleResult exists
    if (styles && level.styleResult) {
        // Check if list of styles contain right style and not empty
        //const allStylesValid = styles.some(style => dataForLevel.styleResult.includes(style) && style !== "");
        if (styles.includes(level.styleResult)) {
            return true
        } else {
            console.log("wrong styles");
            return false
        } 
    }
    else{
        console.log("no styles");
        return false
    }
} 
