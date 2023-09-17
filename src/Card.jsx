import React from 'react'


export default function Card({ id, title, pri, checkItem, isDone }) {


  const style = () =>{
    if(pri === "high") return 'red';
    else if (pri === "normal") return "yellow";
    else if (pri === "low") return "green"
  };

  


  return (
    <div style={{ backgroundColor: style(), filter:isDone && "grayscale(100%)" }} className='flex justify-between mt-3 bg-white shadow-lg rounded-lg items-center p-3 '>
        <p className='text-[18px]' style={{textDecoration: isDone && "line-through"}}>{title}</p>
        {/* <p className='text-[15px] text-gray-600'>{pri}</p> */}
        <input type="checkbox" name="" id="" onChange={()=> checkItem(id)} />

    </div>
  )
}
