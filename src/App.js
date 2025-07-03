import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import Navbar from './NavBar';
import Footer from './Footer';
import Login from './Login-SignIn';
import Home from './Home';
import Congrats from './Congrats';

function App() {
  return (
    <Router> {/* ✅ Wrap everything inside Router */}
      <Navbar />
      <div className='routes'>
        <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login-sign" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
