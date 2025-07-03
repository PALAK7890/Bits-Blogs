import React,{useEffect,useState} from 'react'
import { reviews } from './ mockapi';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const[blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/posts?limit=10")
        .then(response => response.json())
        .then(data=>setBlogs(data.posts))
        .catch(error => console.error('Error fetching blogs:', error));
    

    },[])

    const[review,setReview]=useState([])

    const navigate=useNavigate()

  return (
    <div> 
        
         <div className='home-container'>
            <div className='blog'>
                <h2>Let's Create Your First Blog!</h2>
                <h3>A Canvas for Thoughts, A Page for Feelings.</h3>
                <button className='blog-button' onClick={()=>navigate('/Create')}>Create</button>
                
                <p style={{ marginTop: '20px' }}>Haven’t registered yet? Please log in or sign up below:</p>
                <button className='blog-button' onClick={()=> navigate('/login-sign')} style={{padding:'10px',margin:'10px',width:'80px'}}>Login</button>
                <button className='blog-button' onClick={()=> navigate('/login-sign')} style={{padding:'10px',margin:'10px',width:'80px'}}>Sign-in</button>

         
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

            <div className='selling-points'>
                <div className='first-selling-point'>
                    <div className='selling-point-texts'>
                    <h3>🎨 Express Beyond the Canvas</h3>
                    <p>Not every emotion fits inside a frame — some deserve to be written.
                        Our platform gives artists a space to blog about the feelings behind their art,
                        share what inspired each brushstroke, and connect deeper with their audience.
                        Let your voice be heard alongside your visuals.</p></div>
                    <img src='https://i.pinimg.com/736x/97/8d/c9/978dc9ba020206a6ec2d75c3dfd81d5e.jpg' alt=''></img>
                </div>
                <div className='second-selling-point'>
                    <img src='https://i.pinimg.com/736x/2d/aa/bd/2daabda73de3bf1eacec72bb3a15dd81.jpg' alt='' ></img>
                    <div className='selling-point-texts'><h3>🌟 Build Your Artistic Identity</h3>
                    <p>This is more than a blog — it’s your personal gallery with a voice.
                        Whether you're sharing your journey, creative process, or emotional struggles,
                        our platform helps you build a digital presence that reflects who you truly are as an artist.</p></div>
                    
                </div>

            </div>

            <div className='reviews'>
                <h2>What Our Artists Say </h2>
                <div className='review-api'>
                    {reviews.map((review,index)=>(
                        <div key={index} className='artist'>
                            <img src={review.image} alt={review.name}></img>
                            <h3>{review.name}</h3>
                            <p>{review.description}</p>
                        </div>
                    ))}

                </div>
            </div>

         </div>
         
    </div>
  )
}
