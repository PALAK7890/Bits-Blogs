import React, { useEffect, useState } from 'react';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating API data fetch
    const data = {
      articles: [
        {
          title: "The Beauty of Nature",
          image: "https://i.pinimg.com/736x/ad/7d/0d/ad7d0d8c9cfae84d8bbec3a64a4a8604.jpg",
          paragraph: "Nature offers some of the most beautiful and inspiring sights in the world, from serene mountains to vast oceans."
        },
        {
          title: "Advancements in AI",
          image: "https://i.pinimg.com/736x/60/4d/ee/604dee9f329a327869081739d6158eff.jpg",
          paragraph: "Artificial Intelligence is transforming the way we live and work, with new innovations emerging every day."
        },
        {
          title: "Exploring Space",
          image: "https://i.pinimg.com/736x/cd/e2/cf/cde2cf9ce7123012d8e1c96ba252f07d.jpg",
          paragraph: "Space exploration has always fascinated humans. From the Moon landing to Mars missions, we continue to reach new frontiers."
        },{
          title: "The Beauty of Nature",
          image: "https://i.pinimg.com/736x/1f/69/dd/1f69dd7748e70626dd04c5b66eec451a.jpg",
          paragraph: "jkdxhgbfdjguhfero dfhgujrkdflbgrd serene mountains to vast oceans."
        },
        {
          title: "soul and heart",
          image: "https://i.pinimg.com/736x/c0/84/db/c084dbf104bbf5747b0cdf672264aed2.jpg",
          paragraph: "Artificial Intelligence is transforming the way we live and work, with new innovations emerging every day."
        },
        {
          title: "Lilliesssss",
          image: "https://i.pinimg.com/736x/e3/0c/6f/e30c6f27c6ef3ec2df1dac72b55c68fc.jpg",
          paragraph: "these flowers are one the best one of nature "
        }
        
      ]
    };

    setBlogs(data.articles);
  }, []);

  return (
    <div className='featuredblogcard'>
      <h1 className='featured-heading '>Featured Blogs</h1>
          <div className='blogcard'>
            {blogs.map((blog, index) => (
        <div className="FeaturedImages" key={index}>
            <img className="images" src={blog.image} alt={blog.title} />
           <h3 className="FeaturedImages-title">{blog.title}</h3>
            <p className="featuredimages-text">{blog.paragraph}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FeaturedBlogs;
