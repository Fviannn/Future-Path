import React from 'react';
import './Style.css';
import Campus from './assets/campus.jpg';

function Banner() {
  return (
    <div className="banner">
      <img alt="University campus with buildings and trees" src={Campus} className='banner-image' />
      <div className="text">
        <h1>News</h1>
        <p>Explore the latest news, events, from top universities and schools.</p>
      </div>
    </div>
  );
}

export default Banner;
