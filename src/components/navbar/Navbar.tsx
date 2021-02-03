import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar () {
  const [selectedId, setSelectedId] = useState(0)
  return (
    <div className='navbar'>
      <Link
        onClick={() => setSelectedId(0)}
        className={selectedId === 0 ? 'link_selected' : ''}
        to='/'
      >
        Home
      </Link>
      <Link
        onClick={() => setSelectedId(1)}
        className={selectedId === 1 ? 'link_selected' : ''}
        to='/create'
      >
        Create schedule
      </Link>
      <Link
        onClick={() => setSelectedId(2)}
        className={selectedId === 2 ? 'link_selected' : ''}
        to='/manager'
      >
        Manage schedules
      </Link>
    </div>
  )
}

export default Navbar
