import React from 'react'
import Form from '../../components/Form'
import Button from '../../components/Button'

function Login() {
  return (
      <div className='min-h-screen bg-[#FAFBFF] flex flex-col justify-center items-center '>
          <div className='flex flex-col gap-5  px-5 py-10 bg-white shadow-slate-600 shadow-md rounded-lg'>
              <h1 className='text-3xl'>Login Into Your Account</h1>

                  <Form name={'username'} placeholder={'Username'} type={'text'}>Username</Form>
              <Form name={'password'} placeholder={'Password'} type={'text'}>Password</Form>
              <a className='decoration-on'>Forgot Passowrd?</a>
                    <Button>Login</Button>
           
              
        </div>
    </div>
  )
}

export default Login