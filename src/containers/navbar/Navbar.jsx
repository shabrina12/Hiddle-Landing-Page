import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar_image'><img src={logo} alt='logo' /></div>
        <div className='navbar_button'><button type='button'>Try it Free</button></div>
    </div>
  )
}

export default Navbar