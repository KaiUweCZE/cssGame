import { levelData } from "../data/LevelData";

export const styleChecker = (level, styles) => {
    // Fetch data for current level
    const dataForLevel = levelData.find(e => e.level === level);
    
    // Check if styleResult exists
    if (dataForLevel && dataForLevel.styleResult) {
        // Check if list of styles contain right style and not empty
        const allStylesValid = styles.some(style => dataForLevel.styleResult.includes(style) && style !== "");
        
        if (allStylesValid) {
            return true
        } else {
            return false
        }
    } else {
        console.log("No styleResult found for this level");
    }
};