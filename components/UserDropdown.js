import React from "react";

const UserDropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <select
        className="bg-[#5932EA] text-white py-3 px-4 rounded-md transition-colors duration-300 hover:bg-[#4628b7] focus:outline-none appearance-none w-full"
        style={{  }}
      >
        <option className="text-black bg-white">Adam</option>
        <option className="text-black bg-white">Raysa</option>

      </select>
    </div>
  );
};

export default UserDropdown;
