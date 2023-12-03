import React, { useEffect, useState } from "react";
import { list } from "../data/listOfProperities";


const SuggestList = (props) => {
    const [suggestions, setSuggestions] = useState([]);
    const [visible, setVisible] = useState(false)

    useEffect(()=> {
        const findSimilar = () =>{
            if (props.value !== "") {
                const filteredArray = list.filter(prop => prop.startsWith(props.value) && prop !== props.value)
                setSuggestions(filteredArray)
                if (filteredArray.length < 1) {
                    setVisible(false)
                } else {
                    setVisible(true)
                }    
            }
            if (props.value === "") {
                setVisible(false)
            }
        }
        findSimilar()
        
    }, [props.value])

    const confrimText = (e) => {
        setVisible(false)
        props.func(e)
    }

    return(
        visible ?
            <ul className="box-properties">
            {
                suggestions.map((property, index) => {

                    return(
                        <li key={index} onClick={e => confrimText(e.target.outerText)}>{property}</li>
                    )
                })
            }
            </ul>
            : ""
    )
}


export default SuggestList