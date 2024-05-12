import React from "react";

const Time = ({ value, label, onChange, readOnly = false }) => {
  return (
    <form className="mb-4">
      <label className="block mb-1 text-sm">{label}</label>
      <input
        className="border border-gray-300  rounded px-3 py-2 w-full"
        type="time"
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      ></input>
    </form>
  );
};

export default Time;
