import React, { useState, useEffect, useContext } from 'react';
import { cn } from 'recn';
import { getDifference, getCurrentDay, getNextWeekday, format, getWeekday } from '../../utils';
import * as langset from './Countdown.i18n';
import * as commonLangset from '../../common/common.i18n';

import { LanguageContext } from '../../context/LanguageContext';

import './Countdown.scss';
import { Counter } from '../Counter/Counter';

export const cnCountdown = cn('Countdown');

interface ICountdownProps {
  event?: string;
}

export const Countdown: React.FC<ICountdownProps> = React.memo(props => {
  const { locale } = useContext(LanguageContext);
  const lang = langset[locale];
  const commonLang = commonLangset[locale];

  let timerId: number;
  let currentDate = getCurrentDay();
  const targetDate = getWeekday(currentDate);
  let isFinished = targetDate.hasSame(currentDate, 'day');
  const targetNextDate = getNextWeekday(currentDate);

  const [time, setTime] = useState(getDifference(targetNextDate, currentDate));
  const [finished, setFinished] = useState(isFinished);

  const computeTime = () => {
    currentDate = getCurrentDay();
    isFinished = targetDate.hasSame(currentDate, 'day');
    setTime(getDifference(targetNextDate, currentDate));
    if (isFinished !== finished) {
      setFinished(isFinished);
    }
  }

  const startCounter = () => {
    timerId = window.setInterval(computeTime, 1000);
  };

  const stopCounter = () => clearInterval(timerId);

  useEffect(() => {
    startCounter();

    return stopCounter;
  }, []);

  const remainingTime = format(time, 'dd,hh,mm,ss').split(',');

  return (
    <div className={cnCountdown()}>
      {finished && <div className={cnCountdown('FinalTitle')}>{`${lang.finally} пятница!`}</div>}
      <div className={cnCountdown('Title')}>{`Пятница ${lang.in}:`}</div>
      <div className={cnCountdown('Divider')} />
      <div className={cnCountdown('RemainingTime')}>
        <Counter unit={commonLang.days} value={remainingTime[0]} />
        <Counter unit={commonLang.hours} value={remainingTime[1]} />
        <Counter unit={commonLang.minutes} value={remainingTime[2]} />
        <Counter unit={commonLang.seconds} value={remainingTime[3]} />
      </div>
    </div>
  );

});