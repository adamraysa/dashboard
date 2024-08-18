import React from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '../../components/Sidebar'

const Calendar = dynamic(() => import('react-calendar'), { ssr: false })

function CalendarPage () {
  return (
    <>
      <Sidebar />
      <div className='content h-screen w-3/4 ml-auto flex flex-col bg-[#FAFBFF] p-6'>
        <h2 className='text-2xl text-[#303030] font-bold mb-6'>
          Hello Adam Raysa 👋
        </h2>
        <div className='bg-white p-4 rounded-3xl px-5 py-7 shadow-md flex-1 overflow-auto'>
          <div className='px-4 mb-4'>
            <h3 className='text-xl font-semibold'>Calendar</h3>
            <div className='calendar-container'>
              <Calendar className='react-calendar' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarPage
