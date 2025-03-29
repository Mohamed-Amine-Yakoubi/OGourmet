import React from "react";

 
export const Input = ({ label, name, placeholder, rows, value, onChange }) => {
    
  return (
    <div>
      <label className="block mb-2 text-sm font-mediumtext !text-[#ffbe33] ">
        {label}
      </label>
      <textarea
        name={name}
        className="Input text-sm rounded-lg block w-full p-2.5 overflow-hidden"
        placeholder={placeholder}
        rows={rows} // control the height here
        value={value}  // Bind the value to the state
        onChange={onChange}  // Handle changes
        required
      />
    </div>
  );
};
