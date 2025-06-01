import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button class="cursor-pointer bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-md  transition duration-150">
            {text}
</button>
    </div>
  )
}

export default Button
