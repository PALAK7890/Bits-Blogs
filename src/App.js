import React, { useState } from 'react';
import Navbar from './Navbar';
import SignInPage from './SignIn';
import Home from './Home';
import About from './About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar onSignInClick={() => setCurrentPage('signin')} />
  
      
      {currentPage === 'signin' ? (
        <SignInPage />
      ) : (
        <Home />
      )}
     
    </>
  );
}

export default App;
