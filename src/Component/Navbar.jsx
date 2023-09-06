import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return(
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <Link to="/" className='navbar-brand ml-5'>Contact Manager</Link>
    </nav>
  )
}

export default Navbar