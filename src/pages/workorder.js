import React from 'react'
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Button'
import UserDropdown from '../../components/UserDropdown'
import { FaEdit, FaTrash } from "react-icons/fa";

function workorder() {
  return (
    <>
      <Sidebar />
      <div className="content h-screen w-3/4 ml-auto flex flex-col bg-[#FAFBFF] p-6">
        <h2 className="text-2xl text-[#303030] font-bold mb-6">
          Hello Adam Raysa 👋
        </h2>
        <div className="bg-white p-4 rounded-3xl px-5 py-7 shadow-md flex-1">
          <div className="flex justify-between items-center px-4 mb-4">
            <h3 className="text-xl font-semibold">All Work Order</h3>
            <div className="flex space-x-4">
              <Button onClick={() => setIsModalOpen(true)}>Add Worklog+</Button>
              <UserDropdown />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-16rem)]">
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr>
                <th className="border-b-2 p-4 text-left">No</th>
                  <th className="border-b-2 p-4 text-left">Week</th>
                  <th className="border-b-2 p-4 text-left">Date</th>
                  <th className="border-b-2 p-4 text-left">Due Date</th>
                  <th className="border-b-2 p-4 text-left">PIC</th>
                  <th className="border-b-2 p-4 text-left">Work Giver</th>
                  <th className="border-b-2 p-4 text-left">Project</th>
                  <th className="border-b-2 p-4 text-left">Account</th>
                  <th className="border-b-2 p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
              
                  <tr>
                    <td className="border-b p-4">1</td>
                    <td className="border-b p-4">21</td>
                    <td className="border-b p-4">07-01-2024</td>
                    <td className="border-b p-4">08-01-2024</td>
                    <td className="border-b p-4">TEST</td>
                    <td className="border-b p-4">TEST</td>
                    <td className="border-b p-4">TEST</td>
                    <td className="border-b p-4">TEST</td>
                    <td className="border-b p-4">
                      <div className="flex space-x-2">
                      <button className='bg-slate-400 text-white py-2 px-4 rounded-xl'>
                        See Full
                        </button>
                        <button className="bg-[#5932EA] text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-[#4628b7]">
                          <FaEdit />
                        </button>
                                          
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-red-600">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default workorder;