import React from 'react';
import './header.css';
import screenImg from '../../assets/screen-mockups.svg';

const Header = () => {
  return (
    <div className='header section__padding'>
      <h1>Build The Community Your Fans Will Love</h1>
      <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
      <button>Get Started For Free</button>
      <div className='header-img'><img src={screenImg} alt='screen' /></div>
    </div>
  )
}

export default Header