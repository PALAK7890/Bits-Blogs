import React from 'react'
import Logo from './Logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate()
    return ( <>
    <div className="navBar">

        <img src={Logo} alt=' ' className='Logo'></img>
      

        <ul>
            <li><button onClick={()=>navigate('/home')} className='nbutton'>Home</button></li>
            <li><button onClick={()=>navigate('/about')} className='nbutton'>About</button></li>
            <li><button onClick={()=>navigate('/home')} className='nbutton'>Features</button></li>
            <li><button onClick={()=>navigate('/home')} className='nbutton'>Blogs</button></li>
            
        </ul>
        <div className='search-box'>

            <input type='text' placeholder='Search..'/>
            <img src='https://i.pinimg.com/736x/ae/2d/8e/ae2d8e99e43d87ca883afbf7a01c1e7b.jpg' alt='' className='search-icon'/>
            
        </div>


    </div>
    </> ) ;
}
 
export default Navbar;