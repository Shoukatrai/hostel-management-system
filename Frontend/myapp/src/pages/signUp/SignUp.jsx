import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-white  m-auto w-150 rounded p-3 shadow-md text-slate-900 flex flex-col gap-2 justify-between '>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-slate-900'>Get Started with Hostel Portal</h1>
        <h3 className='text-sm text-slate-600 mt-1' >Register now to manage your hostel journey</h3>
      </div>

      <div className='flex flex-col gap-1' >
        <label >
          Full Name:
        </label>
        <Input placeholder={"Enter your Name:"} type={"text"} />


      </div>


      <div className='flex flex-col gap-1'>
        <label >
          Email:
        </label>

        <Input placeholder={"Enter your email:"} type={"email"} />
      </div>

      <div>
        <label className='flex flex-col gap-1'>
          Password:
        </label>

        <Input placeholder={"Enter Password:"} type={"password"} />

      </div>

      <div>
        <label className='flex justify-between gap-1' >
          Remember me:
        </label>
        <Input type={"checkbox"} />

      </div>








<div>
    <Button text={"Sign up"} />
</div>
    <Link to={""}>Login</Link>
    </div>
  )
}

export default SignUp
