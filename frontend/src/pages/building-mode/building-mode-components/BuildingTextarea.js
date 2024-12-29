import React, { useState } from "react";

const BuildingTextarea = (props) => {
  const [selectTextarea, setSelectTextarea] = useState(false);

  return (
    <>
      <div className="form-section-checkbox" role="group" aria-labelledby="description-label">
        <label id="description-label" htmlFor="description-toggle">Set description(optional):</label>
        <input
          type="checkbox"
          name="description-toggle"
          id="description-toggle"
          onClick={() => setSelectTextarea(!selectTextarea)}
          aria-controls="description-textarea"
          aria-expanded={selectTextarea}
        />
      </div>
      {selectTextarea ? (
        <textarea
          name="description"
          id="description-textarea"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="max length of the text is 500 chars"
          onChange={(e) => props.description(e.target.value)}
          aria-label="Level description"
          aria-describedby="description-limit"
        ></textarea>
      ) : (
        ""
      )}
    </>
  );
};

export default BuildingTextarea;
