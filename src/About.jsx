import React from 'react';
import { teams } from './ mockapi';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
            <div className="about-text">
          <h1>About Us</h1>
          <p> Welcome to Bits & Blogs — a sanctuary where artists turn emotions into words and visuals.
            Our mission is to empower creators to share not only their artworks, but also the stories, thoughts, and feelings behind them.</p>
        </div>
        <img src="https://i.pinimg.com/736x/22/82/27/228227ce2616ed16ab3428ff022247ec.jpg" alt="Artistic representation"/>
      </div>

      <div className="about-section">
        <img src="https://i.pinimg.com/736x/0c/76/eb/0c76eb5f920843d298a6412f8e57a610.jpg" alt="Artist working"/>
        <div className="about-text">
          <h2>More Than Just a Blog</h2>
          <p>This isn't your average blog platform. It's a personal gallery, a diary, a voice. Artists can reflect on their work, document their process, and connect on a deeper level with an audience that values authenticity. </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-text">
          <h2>Why We Exist</h2>
          <p>We noticed a gap — beautiful art was being shared, but the stories were missing.
            CanvasVerse was born from the desire to give every painting a voice and every artist a place to speak freely. </p>
        </div>
        <img src="https://i.pinimg.com/736x/12/1f/98/121f9882e5f727eb46ef503b59cd3f48.jpg"alt="Expression through art"/>
      </div>
<div className='team-wrap'>
    <h2>Meet the Team</h2>
    
    {teams.map((team,index)=>(
        <div className='about-team' key={index}>
        <img src={team.image} alt={team.name}></img>
        <h3>{team.name}</h3>
        <h5>{team.designation}</h5>
        <p>{team.description}</p>

      </div>

    ))}
      
      </div>
    </div>
  );
}
 
export default About;