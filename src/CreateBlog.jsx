import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const navigate = useNavigate();

  const handlePublish = () => {
    
    navigate('/Congrats'); 
  };

  return (
    <div>

      <div className='CreateBlog-container'>
        <h3>Make your Art Speak ✨</h3>

        <div className='write'>
          <h5>Title</h5>
          <input type='text' placeholder='Title' />

          <h5>About your masterpiece</h5>
          <textarea placeholder='Content'></textarea>

          <button className='submit-btn' onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>

     
    </div>
  );
}

