import React, {forwardRef} from "react";

// this component signs a place for right answer
const CheckPoint = forwardRef((props, ref) => {

    return(
        <div ref={ref} className="target-area">

        </div>
    )
})


export default CheckPoint