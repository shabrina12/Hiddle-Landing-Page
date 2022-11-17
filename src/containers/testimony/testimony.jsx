import React from 'react';
import icon from '../../assets/icon-communities.svg';
import icon2 from '../../assets/icon-messages.svg';
import './testimony.css';

const testimony = () => {
  return (
    <div className='testimony section__padding'>
        <div className='testimony-content'>
            <img src={icon} alt='icon' />
            <h1>1.4k+</h1>
            <p>Communities Formed</p>
        </div>
        <div className='testimony-content'>
            <img src={icon2} alt='icon' />
            <h1>2.7m+</h1>
            <p>Messages Sent</p>
        </div>
    </div>
  )
}

export default testimony