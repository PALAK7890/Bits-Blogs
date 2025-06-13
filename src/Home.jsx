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


  

  return (
    <div> 
         <Navbar/>
         <div className='home-container'>
            <div className='create-blog'>
                <h2>Let's Create Your First Blog!</h2>
                <button className='create-blog-button'>Create</button>
                <p style={{ marginTop: '20px' }}>Haven’t registered yet? Please log in or sign up below:</p>

         
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
         <Footer/>
    </div>
  )
}
