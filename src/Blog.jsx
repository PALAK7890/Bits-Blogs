import React from 'react';

export default function BlogPage() {
  const blogs = [
    {
      title: 'The Power of Writing Your Ideas',
      description: 'Discover how blogging clarifies thoughts and builds your brand.',
      author: 'Palak Dahiya',
      image: 'https://i.pinimg.com/736x/75/92/28/759228cc3cfa0880ec6b247322d58669.jpg'
    },
    {
      title: 'Mastering React Hooks',
      description: 'Learn how to use useEffect, useState, and more effectively.',
      author: 'Palak Dahiya',
      image: 'https://i.pinimg.com/736x/4f/bb/01/4fbb01b6e925fa9ef46df6ded897aab6.jpg'
    },
    {
      title: 'Frontend vs Backend: A Simple Guide',
      description: 'Understand the difference between frontend and backend development.',
      author: 'Palak Dahiya',
      image: 'https://i.pinimg.com/474x/76/3b/94/763b9417566ef24d333ad75aa62b83cc.jpg'
    }
  ];
    return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Blog</h1>
          <p className="hero-tagline">
            Explore the latest trends, insights, and stories from our experts.
          </p>
        </div>
      </div>

      <div className="carousel-container">
        {blogs.map((blog, index) => (
          <div className="carousel-card" key={index}>
            <img src={blog.image} alt={blog.title} className="carousel-image" />
            <div className="carousel-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <p className="author">By {blog.author}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
          </>
  );
}