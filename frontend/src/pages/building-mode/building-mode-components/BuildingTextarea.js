import React, { useState } from "react";

const BuildingTextarea = (props) => {
  const [selectTextarea, setSelectTextarea] = useState(false);

  return (
    <>
      <div className="form-section-checkbox">
        <label>set description?</label>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={() => setSelectTextarea(!selectTextarea)}
        />
      </div>
      {selectTextarea ? (
        <textarea
          name="description"
          id="descripton"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="max length of the text is 500 chars"
          onChange={(e) => props.description(e.target.value)}
        ></textarea>
      ) : (
        ""
      )}
    </>
  );
};

export default BuildingTextarea;
