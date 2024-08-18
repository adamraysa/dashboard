import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import { FaEdit, FaTrash } from 'react-icons/fa'
import UserDropdown from '../../components/UserDropdown'
import ModalBox from '../../components/ModalBox'
import { useState } from 'react'

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [worklogs, setWorklogs] = useState([
    {
      date: '2024-08-15',
      week: '32',
      pic: 'John Doe',
      opportunity: 'Sales Opportunity',
      type: 'Meeting',
      account: 'ABC Corp',
      activity: 'Discussed project details'
    }
    // Contoh data lainnya...
  ])

  const handleSaveWorklog = newWorklog => {
    setWorklogs([...worklogs, newWorklog])
  }

  return (
    <>
      <Sidebar />
      <div className='content h-screen w-3/4 ml-auto flex flex-col bg-[#FAFBFF] p-6'>
        <h2 className='text-2xl text-[#303030] font-bold mb-6'>
          Hello Adam Raysa 👋
        </h2>
        <div className='bg-white p-4 rounded-3xl px-5 py-7 shadow-md flex-1'>
          <div className='flex justify-between items-center px-4 mb-4'>
            <h3 className='text-xl font-semibold'>All Worklog</h3>
            <div className='flex space-x-4'>
              <Button onClick={() => setIsModalOpen(true)}>Add Worklog+</Button>
              <UserDropdown />
            </div>
          </div>
          <div className='overflow-y-auto max-h-[calc(100vh-16rem)]'>
            <table className='min-w-full text-sm bg-white'>
              <thead>
                <tr>
                  <th className='border-b-2 p-4 text-left'>Nomor</th>
                  <th className='border-b-2 p-4 text-left'>Date</th>
                  <th className='border-b-2 p-4 text-left'>Week</th>
                  <th className='border-b-2 p-4 text-left'>PIC</th>
                  <th className='border-b-2 p-4 text-left'>Opportunity</th>
                  <th className='border-b-2 p-4 text-left'>Type</th>
                  <th className='border-b-2 p-4 text-left'>Account</th>
                  <th className='border-b-2 p-4 text-left'>Activity</th>
                  <th className='border-b-2 p-4 text-left'>Action</th>
                </tr>
              </thead>
              <tbody>
                {worklogs.map((log, index) => (
                  <tr key={index}>
                    <td className='border-b p-4'>{index + 1}</td>
                    <td className='border-b p-4'>{log.date}</td>
                    <td className='border-b p-4'>{log.week}</td>
                    <td className='border-b p-4'>{log.pic}</td>
                    <td className='border-b p-4'>{log.opportunity}</td>
                    <td className='border-b p-4'>{log.type}</td>
                    <td className='border-b p-4'>{log.account}</td>
                    <td className='border-b p-4'>{log.activity}</td>
                    <td className='border-b p-4'>
                      <div className='flex space-x-2'>
                        <button className='bg-[#5932EA] text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-[#4628b7]'>
                          <FaEdit />
                        </button>
                        <button className='bg-red-500 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-red-600'>
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalBox
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveWorklog}
      />
    </>
  )
}
