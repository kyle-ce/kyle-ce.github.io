import React from "react";

const Select = ({ options, defaultValue, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">Lunch</label>
      <select
        defaultValue={defaultValue}
        className="border border-gray-300 rounded px-3 py-2 w-full "
        onChange={onChange}
      >
        {options.map(({ value, label, selected }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
