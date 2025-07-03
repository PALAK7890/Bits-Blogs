import React,{useEffect,useState} from 'react'

import Navbar from './NavBar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const[blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/posts?limit=10")
        .then(response => response.json())
        .then(data=>setBlogs(data.posts))
        .catch(error => console.error('Error fetching blogs:', error));

    },[])

    const navigate=useNavigate()

  return (
    <div> 
        
         <div className='home-container'>
            <div className='create-blog'>
                <h2>Let's Create Your First Blog!</h2>
                <button className='create-blog-button' onClick={()=>navigate('/Create')}>Create</button>
                
                <p style={{ marginTop: '20px' }}>Haven’t registered yet? Please log in or sign up below:</p>
                <button className='create-blog-button' onClick={()=> navigate('/login-sign')} style={{padding:'10px',margin:'10px',width:'80px'}}>Login</button>
                <button className='create-blog-button' onClick={()=> navigate('/login-sign')} style={{padding:'10px',margin:'10px',width:'80px'}}>Sign-in</button>

         
            </div>
            <div className='featured-blogs'>
                <h3>Featured Blogs:)</h3>
                <div className='featured-blogs-grid'>
                    {blogs.map(blog=>(
                        <div key={blog.id}className='grid'>
                            <img src={blog.image} alt={blog.title} className='grid-image'></img>
                            <p>{blog.description}</p>
                        </div>
                    ))}
                </div>


            </div>

         </div>
         
    </div>
  )
}
