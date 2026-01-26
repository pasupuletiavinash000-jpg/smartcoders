import React from 'react';

function Landing({ goToCourse }) {
  // Replace this with your actual Instagram URL
  const instaLink = "https://www.instagram.com/_smartcoders/"; 
  
  // Replace with your email for requests
  const mailLink = "mailto:support@smartcoders.com?subject=Requesting a New Topic";

  return (
    <>
      <div className="navbar">
        <span>Smart Coders </span>
      </div>

      <div className="container">
        <h1>Master Coding <br /> Day by Day</h1>
        <p>
          A structured, interactive way to learn programming. 
          Enter your day number and get instant access to notes and code.
        </p>

        <button className="btn" onClick={goToCourse}>
          Start Learning Now
        </button>

        {/* --- NEW PROMO SECTION --- */}
        <div className="community-section">
          <h2>Join Our Community 🌍</h2>
          <p>
            Don't learn alone! Follow us for daily quizzes, coding tips, 
            and logic building challenges.
          </p>
          
          {/* Instagram Button */}
          <a href={instaLink} target="_blank" rel="noreferrer">
            <button className="btn btn-insta">
              📸 Follow on Instagram
            </button>
          </a>

          {/* Needed Option: Request Topic */}
          <a href={mailLink}>
            <button className="btn btn-secondary">
              💡 Request a Topic
            </button>
          </a>
        </div>

      </div>
    </>
  );
}

export default Landing;