import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar () {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create schedule</Link>
      <Link to='/create'>Manage schedules</Link>
    </div>
  )
}

export default Navbar
