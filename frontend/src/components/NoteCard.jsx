import React from 'react'
import { Link } from 'react-router-dom'
function NoteCard({id,title,
  description}) {
   
  return (
    <div className='w-[280px] h-[200px] bg-white text-black flex flex-col '>
      <Link to={`/details/${id}`}>
        <div className='w-full  flex justify-between text-3xl px-2 py-2 font-extrabold'>
        {title?.toUpperCase()}  <span>⫶</span>
        </div>
      </Link>
        <div className='w-full max-h-[150px] p-1 overflow-hidden text-lg border-t break-words'>{description}</div>
    </div>
  )
}

export default NoteCard