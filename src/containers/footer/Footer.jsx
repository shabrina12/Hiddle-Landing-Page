import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import message from '../../assets/icon-messages.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-content section__padding'>
        <div className='footer-content-logo'>
          <img src={message} alt='icon msg' />
          <h1>Huddle</h1>
        </div>

        <div className='footer-content-p'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
        </div>
        
        <div className='footer-content-contact'>
          <p>Phone: +1-543-123-4567</p>
          <p>example@huddle.com</p>
        </div>
        
        <div className='footer-content-icons'>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className='icon' size={42} />
          </a>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='icon' size={42} />
          </a>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className='icon' size={42} />
          </a>
        </div>
      </div>

      <div className='footer-content section__padding'>
        <div className='footer-content-newsletter'>
          <h2>NEWSLETTER</h2>
        </div>
        <p className='footer-content-p'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
        <div className='footer-content-newsletter-input'>
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Subscribe</button>
        </div>
        <p>Coded by Shabrina Putri.</p>
      </div>

    </div>
  )
}

export default Footer
