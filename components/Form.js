import React from 'react'

const Form = ({ children, nama, type, placeholder }) => {
    return (
    <form className=''>
    <label className=' text-xl'>{children}</label>
            <br></br>
            <input className='p-2 w-96 rounded-lg border-solid border-slate-300 border' name={nama} type={type} placeholder={placeholder}></input>
    </form>
  )
}

export default Form