import React from "react";
import { FaCalendarAlt, FaClipboardList, FaTasks } from "react-icons/fa";
import Profile from "../public/img/ss.jpg"

const Sidebar = () => {
  return (
    <div className=" w-1/4 dashboard-color h-screen text-black fixed flex flex-col justify-between p-12">
      <div>
        <h1 className="text-2xl font-bold mb-8">Teknomadya</h1>
        <nav className="flex flex-col space-y-4">
          <button className="flex button-side shadow-md items-center hover:!text-white bg-putih hover:bg-ungu p-3 rounded-md transition duration-300">
            <FaCalendarAlt className="mr-3" /><p>Calendar</p>
          </button>
          <button className="flex button-side shadow-md items-center hover:!text-white bg-putih  hover:bg-ungu  p-3  rounded-md transition duration-300">
            <FaClipboardList className="mr-3" /><p>Workorder</p>
          </button>
          <button className="flex button-side shadow-md items-center hover:!text-white bg-putih  hover:bg-ungu p-3  rounded-md transition duration-300">
            <FaTasks className="mr-3" /><p>Worklog</p>
          </button>
        </nav>
      </div>
      <div className="flex items-center">
        <img
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"        
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Adam Raysa</h3>
          <p className="text-sm text-gray-400">Pegawai Magang</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
