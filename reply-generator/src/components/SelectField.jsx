import React from "react";

const SelectField = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <select
        className="w-full border p-2 rounded-md"
        value={value}
        onChange={onChange}
      >
        <option value="neutral">Neutral</option>
        <option value="friendly">Friendly</option>
        <option value="formal">Formal</option>
      </select>
    </div>
  );
};

export default SelectField;
