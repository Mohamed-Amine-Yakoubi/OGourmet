import React from "react";

 

  export const Input= ({ label, id, placeholder ,rows }) => {
    
  return (
    <div>
      <label className="block mb-2 text-sm font-mediumtext !text-[#ffbe33] ">
        {label}
      </label>
      <textarea
        id={id}
        className="Input text-sm rounded-lg block w-full p-2.5 overflow-hidden"
        placeholder={placeholder}
        rows={rows} // control the height here
        required
      />
    </div>
  );
};
