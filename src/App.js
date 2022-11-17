import React from 'react';
import { Footer, Features, Header, Testimony, GetStarted } from './containers';
import Navbar from './containers/navbar/Navbar';
import bgDark from '../src/assets/bg-footer-top-desktop.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Testimony />
      <Features />
      <GetStarted />
      <div className='bgDark' >
        <img src={bgDark} />
      </div>
      <Footer />      
    </div>
  )
}

export default App