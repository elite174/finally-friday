import React, { useState, useEffect } from 'react';
import { cn } from 'recn';
import { getDifference, getCurrentDay, getNextDay, format } from '../../utils';

import './Countdown.scss';

const cnCountdown = cn('Countdown');

export const Countdown = React.memo(() => {
  let currentDate = getCurrentDay();
  let timerId: number;
  let [time, setTime] = useState(getDifference(getNextDay(currentDate), currentDate));

  const computeTime = () => {
    time = time.minus({ second: 1 });
    setTime(time);
  }

  const startCounter = () => {
    timerId = window.setInterval(computeTime, 1000);
  };

  const stopCounter = () => clearInterval(timerId);

  useEffect(() => {
    startCounter();

    return stopCounter;
  }, []);

  return (
    <div className={cnCountdown()}>
      <div className={cnCountdown('Title')}>До пятницы осталось:</div>
      <div className={cnCountdown('Divider')} />
      <div className={cnCountdown('Counter')}>{format(time, `dd дней hh часов mm минут ss секунд`)}</div>
    </div>
  );

});