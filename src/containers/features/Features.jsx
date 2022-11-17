import React from 'react';
import imgSection1 from '../../assets/illustration-grow-together.svg';
import imgSection2 from '../../assets/illustration-flowing-conversation.svg';
import imgSection3 from '../../assets/illustration-your-users.svg';
import './features.css';

const Features = () => {
  return (
    <div className='features'>

      <div className='bg-section-top'>
        <div className='features-container-top'>
          <div className='features-content'>
            <h2>Grow Together</h2>
            <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
          </div>
          <div className='features-image'>
            <img src={imgSection1} alt='img' />
          </div>
        </div>
      </div>

      <div className='features-container-middle'>
        <div className='features-image'>
          <img src={imgSection2} alt='img' />
        </div>
        <div className='features-content'>
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
        </div>
      </div>

      <div className='bg-section-bottom'>
        <div className='features-container-bottom'>
          <div className='features-content'>
            <h2>Your Users</h2>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </div>
          <div className='features-image'>
            <img src={imgSection3} alt='img' />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Features