import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div className='mb-10 mt-10'>
      <Link to={"/"} className='text-4xl text-orange-300'>
        NOTES
      </Link>
     
    </div>
  )
}

export default Header