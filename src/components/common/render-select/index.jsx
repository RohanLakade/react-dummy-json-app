import React from "react";

const RenderSelect = ({ value, onChange, options }) => {
  return (
    <div className="select-wrapper">
      <select value={value} onChange={onChange} className="form-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(RenderSelect);
