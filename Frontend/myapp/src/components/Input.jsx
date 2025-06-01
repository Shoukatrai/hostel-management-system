import React from 'react'

const Input = ({placeholder , type}) => {
  return (
    <div>
      <input type= {type} placeholder={placeholder} className='w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500' />
    </div>
  )
}

export default Input
