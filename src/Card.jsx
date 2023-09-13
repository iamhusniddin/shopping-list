import React from 'react'

export default function Card({title, pri}) {
    


  return (
    <div className='flex justify-between bg-white shadow-lg rounded-lg items-center p-3 '>
        <p className='text-[18px]'>{title}</p>
        <p className='text-[15px] text-gray-600'>{pri}</p>
    </div>
  )
}
