import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Congrats() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // This goes back to CreateBlog ("/")
  };

  return (
    <div className='congrats-container'>
      <h2>🎉 Congrats!</h2>
      <p>Your blog is published successfully.</p>

      <button className='back-btn' onClick={handleBack}>← Back to Blog</button>
    </div>
  );
}
