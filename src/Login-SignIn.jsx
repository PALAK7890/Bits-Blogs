import React,{use, useState} from 'react'
const Login = () => {
    const[isLogin,setIsLogin]=useState(true)


    return ( <>
    <div className='Login-Signin'>
        <div className='Form-container'>
            <div className='Form-toggle'>
                <button className={isLogin? 'active' : ''} onClick={()=>setIsLogin(true)}>Login In</button>
                <button className={!isLogin? 'active' : ''} onClick={()=>setIsLogin(false)}>Sign In</button>
            </div>
       

    {isLogin ?<>
    <div className='form'>

        <h2>Login</h2>
        <input type='email' placeholder='Email..'/>
        <input type='password' placeholder='Password..'/>
        <a href='#'>Forgot Password?</a>
        <p>New member? <a href='#' onClick={()=>setIsLogin(false)}>Sign In Now</a></p>

    </div>
    </> : <>
    <div className='form'>
        <h2>Sign In</h2>
        <input type='email' placeholder='Email..'/>
        <input type='password' placeholder='Password..'/>
        <input type='password' placeholder=' Confirm Password..'/>
        <button>Sign In</button>
     </div>

    </>}
     </div>
    </div>

    
    </> );
}
 
export default Login;