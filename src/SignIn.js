import React, { useState } from 'react';
import Footer from './Footer';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="signin-container">
        <img
          className="logo-image"
          src="https://i.pinimg.com/736x/37/57/5a/37575a213755cad83bd408908623ba22.jpg"
          alt="logo"
        />
        <h1 className="welcome-text">Hi, Please Sign in</h1>

        <div className="signin-box">
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button className="signin-btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignInPage;
