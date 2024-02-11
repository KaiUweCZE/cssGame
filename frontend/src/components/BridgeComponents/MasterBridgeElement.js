import React from "react";

const MasterBridgeElement = (props) => {

    console.log("children style jsou: ", props.prev, props.new);

    const object1 = {};

    Object.defineProperties(object1, {
        1:{top:6},
        2:{"top": "2rem"},
        3:{"right": "5rem"}
    })

    const newOne = Object.entries(props.new)

    //const unorderedStyles = Object.keys(props.prev).filter(key => isNaN(key));

    const baseStyle = {...props.partStylechildrenStyle};
    
    const mergedStyles = {}

   /* const allKeys = new Set([...Object.keys(props.prev), ...Object.keys(props.new)]);

    allKeys.forEach((key,index) => {
        mergedStyles[key] = {
            ...(props.prev[key] || {}),
            ...(props.new[key] || {})
        };
    });*/

    console.log("Important", props.new);
    console.log("checky check", object1);

    return(
        <div className="bridge" style={{...props.style}}>
            { // here we render parts and send info about each to checkpointRef([])
                props.elements.map((part, index) => {
                    const childIndex = index;
                    const childStyle = baseStyle[childIndex] || {}
                    return(
                        <div key={index} ref={props.add} className="bridge__item" style={{
                            ...props.part.mainStyle,
                            ...props.part.childrenStyle[childIndex],
                            backgroundImage: `url(${props.background})`}}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MasterBridgeElement