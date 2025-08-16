'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  years: number;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ years }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + years);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [years]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <div className="countdown-display">
        <div className="time-block">
          <div className="time-number">{formatNumber(timeRemaining.days)}</div>
          <div className="time-label">DAYS</div>
        </div>
        <div className="time-separator">|</div>
        <div className="time-block">
          <div className="time-number">{formatNumber(timeRemaining.hours)}</div>
          <div className="time-label">HOURS</div>
        </div>
        <div className="time-separator">|</div>
        <div className="time-block">
          <div className="time-number">{formatNumber(timeRemaining.minutes)}</div>
          <div className="time-label">MINUTES</div>
        </div>
        <div className="time-separator">|</div>
        <div className="time-block">
          <div className="time-number">{formatNumber(timeRemaining.seconds)}</div>
          <div className="time-label">SECONDS</div>
        </div>
      </div>
      <div className="countdown-message">
        This is how much time you have left.
      </div>
    </div>
  );
}