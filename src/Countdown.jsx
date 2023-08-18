import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h2 className='heading'>
          You're a little early.
        </h2>
        <h1 className='heading'>
          The challenge starts at
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            10
            <span className='legend'>Hours</span>
          </div>
          <div className='countdown-box'>
            00
            <span className='legend'>Minutes</span>
          </div>
          <div className='countdown-box'>
            PM
            {/* <span className='legend'>Seconds</span> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
