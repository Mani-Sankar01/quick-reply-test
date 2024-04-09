import React from "react";

const TextArea = ({ label, value, onChange, readOnly, rows, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <textarea
        className="w-full border p-2 rounded-md"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        rows={rows}
        placeholder={
          placeholder ? placeholder : "Generated reply will be here.."
        }
      />
    </div>
  );
};

export default TextArea;
