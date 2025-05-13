import React, { useContext, useEffect, useState } from "react";
import { exercises } from "../data/exercises-settings";
import { AcademyContext } from "../context/AcademyContext";
import ExerciseBox from "./exercise/ExerciseBox";
import ExerciseHelp from "./exercise/ExerciseHelp";

const AcademyExercise = ({ level }) => {
  const { cssValues, setCssValues, amountOfElements, setAmountOfElements } =
    useContext(AcademyContext);
  const data = exercises.find((e) => e.id === level);
  const { properties, help } = data;
  const [focusedProperty, setFocusedProperty] = useState(null);
  const maxElements = 20;

  const handleState = (value, property) => {
    const newValue = { property, value };

    setCssValues((prev) => {
      const existingValueIndex = prev.findIndex(
        (item) => item.property === property
      );
      if (existingValueIndex !== -1) {
        const newValues = [...prev];
        newValues[existingValueIndex] = newValue;
        return newValues;
      } else {
        return [...prev, newValue];
      }
    });
  };

  const getValue = (property) => {
    const input = cssValues.find((value) => value.property === property);
    return input ? input.value : "";
  };

  useEffect(() => {
    setAmountOfElements(data.numberOfElements);
  }, [data.numberOfElements]);

  const handleAmount = (value) => {
    const newValue = Math.max(Math.min(value, maxElements), 1);

    return newValue;
  };

  return (
    <div className="level-exercise">
      <div className="editable-box">
        <h3>Interactive Box:</h3>

        {data.addElements && (
          <div>
            <input
              type="number"
              max={maxElements}
              value={handleAmount(amountOfElements)}
              onChange={(e) =>
                setAmountOfElements(handleAmount(e.target.value))
              }
            />
          </div>
        )}

        <form
          onSubmit={(e) => e.preventDefault()}
          className="academy-level-form"
        >
          {properties.map((property, index) => (
            <React.Fragment key={index}>
              <div key={property} className="input-box">
                <label htmlFor={`input-${property}`}>{property}: </label>{" "}
                <input
                  type="text"
                  className="exercise-input"
                  value={getValue(property)}
                  id={`input-${property}`}
                  onChange={(e) => handleState(e.target.value, property)}
                  list={`suggestions-${property}`}
                  onFocus={() => {
                    /* Set the delay compared to onBlur so that focusedProperty
                    is no switched to null */
                    setTimeout(() => setFocusedProperty(property), 20);
                  }}
                  onBlur={() => {
                    setTimeout(() => setFocusedProperty(null), 10);
                  }}
                />
                {focusedProperty === property && help[property] && (
                  <ExerciseHelp
                    property={property}
                    values={help[property]}
                    handleState={handleState}
                    setFocusedProperty={setFocusedProperty}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </form>
        <ExerciseBox levelId={level} />
      </div>
    </div>
  );
};

export default AcademyExercise;
