import React from 'react'

function NavBar() {
  return (

    <nav>
        <ul className='nav-links'>
          <li className='nav-items'>
            <a href="./home"> Home</a>
          </li>
      
          <li className='nav-items'>
            <a href="./more">More information</a> 
          </li>
          <li className='nav-items'>
            <a href='./signup'>Sign Up </a>
          </li>

          
        </ul>
      </nav>
  )
}

export default NavBar