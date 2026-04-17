import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='max-w-[80%] mx-auto mt-2 relative '>
        <Header></Header>
        <Outlet></Outlet>
        <Link
        to="/addNote"
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-5 py-3 rounded-full shadow-lg"
        >
        +
      </Link>
    </div>
  )
}

export default Layout