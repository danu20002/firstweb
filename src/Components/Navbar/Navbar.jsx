import React from 'react'
import './Navbar.css'
import logo_black from '../../assets/monkey_logo_black.jpg'
import searchIcon from '../../assets/search_w.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo_black} alt='' className='logo'/>
        <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li><Link to={'/education'}>Education</Link></li>
            <li><Link to={'/skills'}>Skills</Link></li>
            <li><Link to={'/about-us'}>About</Link></li>
           
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={searchIcon} alt='' className='search-icon'/>
            
        </div>
    </div>
  )
}

export default Navbar
