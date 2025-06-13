import React from 'react'
import Logo from './Logo.png'
const Navbar = () => {
    return ( <>
    <div className="navBar">

        <img src={Logo} alt=' ' className='Logo'></img>
      

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Blog</li>
        </ul>
        <div className='search-box'>

            <input type='text' placeholder='Search..'/>
            <img src='https://i.pinimg.com/736x/ae/2d/8e/ae2d8e99e43d87ca883afbf7a01c1e7b.jpg' alt='' className='search-icon'/>
            
        </div>


    </div>
    </> ) ;
}
 
export default Navbar;