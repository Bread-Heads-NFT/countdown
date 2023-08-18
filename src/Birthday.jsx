import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import githubLogo from './githubLogo.svg';
import { Link } from 'react-router-dom';

const Birthday = ({ name, day, month, hour }) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (day === undefined || month === undefined) {
    // This is if not enough params are provided
    month = 8;
    day = 19;
    hour = 22;
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let birthdayDay = new Date(currentYear, month - 1, day, hour);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day, hour);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day, hour);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      };
        countdown();
    }, 1000);
  }, [currentYear, day, hour, month]);

  return (
    <div className='page'>
      <Countdown countdownData={state} name={name} />
      {(
        <>
          <div>
            <h1>UTC</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Birthday;
