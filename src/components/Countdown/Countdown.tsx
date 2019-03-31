import React, { useState, useEffect } from 'react';
import { cn } from 'recn';
import { Dayjs } from 'dayjs';

import './Countdown.scss';
import { getDifference, getCurrentDay, getNextDay, format } from '../../utils';

const cnCountdown = cn('Countdown');

export const Countdown = () => {
  let currentDate = getCurrentDay();
  let timerId: number;
  let [time, setTime] = useState(getDifference(getNextDay(currentDate), currentDate));

  const computeTime = () => {
    time = time.subtract(1, 's');
    setTime(time);
  }

  const startCounter = () => {
    timerId = window.setInterval(computeTime, 1000);
  };

  const stopCounter = () => clearInterval(timerId);

  const formatDate = (time: Dayjs) => {
    const days = time.date() - 1;
    return `${days} дней ${format(time, 'HH часов mm минут ss секунд')}`;
  }

  useEffect(() => {
    startCounter();

    return stopCounter;
  }, []);

  return (
    <div className={cnCountdown()}>
      <div className={cnCountdown('Title')}>До пятницы осталось:</div>
      <div className={cnCountdown('Divider')} />
      <div className={cnCountdown('Counter')}>{formatDate(time)}</div>
    </div>
  );

}