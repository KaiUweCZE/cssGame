import React, { forwardRef, useContext, useState } from "react";
import { LevelContext } from "@contexts/form-contexts/levelContext";
import { ResultContext } from "@contexts/form-contexts/resultContext";

// this component signs a place for right answer
const CheckPoint = forwardRef((props, ref) => {
  const { addToCheckpointRef } = useContext(ResultContext);
  const { level } = useContext(LevelContext);
  // If we have multiple parts, we create an array and
  // store each part separately to check the position
  const elements = Array.from({ length: props.parts });

  return (
    <>
      {props.parts === 1 ? (
        <div className={props.custom ? "target-area__custom" : "target-area"}>
          <div
            ref={props?.addRef ? props.addRef : addToCheckpointRef}
            className="target-area__part"
            style={{ ...level.correctPosition?.wrapperStyle }}
          ></div>
        </div>
      ) : (
        <div
          className="target-area"
          style={{ ...level.correctPosition?.wrapperStyle }}
        >
          {
            // here we render parts and send info about each to checkpointRef([])
            elements.map((_, index) => {
              console.log("part", level.correctPosition);

              return (
                <div
                  key={index}
                  id={index}
                  ref={addToCheckpointRef}
                  className="target-area__part"
                  style={{
                    ...level.correctPosition?.childrenStyle[index],
                  }}
                ></div>
              );
            })
          }
        </div>
      )}
    </>
  );
});

export default CheckPoint;
