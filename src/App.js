import React, { useState } from 'react';
import Navbar from './Navbar';
import SignInPage from './Login';
import Home from './Home';
import About from './About';
import LogInPage from './Login';
import CreateBlog from './createBlog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>

      <Navbar onSignInClick={() => setCurrentPage('signin')} />
        <CreateBlog/>
      
      {currentPage === 'signin' ? (
        <SignInPage />
      ) : (
        <Home />
      )}
     
    </>
  );
}

export default App;
