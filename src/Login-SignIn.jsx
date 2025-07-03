import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ loginButton, signUpButton }) => {
    const[isLogin,setIsLogin]=useState(true)

    const navigate=useNavigate()


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
        <a href='About'>Forgot Password?</a>
        <p>New member? <a href='About' onClick={()=>setIsLogin(false)}>Sign In Now</a></p>
        {loginButton || <button className='lbutton'>Login</button>}

    </div>
    </> : <>
    <div className='form'>
        <h2>Sign In</h2>
        <input type='email' placeholder='Email..'/>
        <input type='password' placeholder='Password..'/>
        <input type='password' placeholder=' Confirm Password..'/>
        {signUpButton || <button className='sbutton'>Sign in</button>}
     </div>

    </>}
     </div>
    </div>

    
    </> );
}
 
export default Login;