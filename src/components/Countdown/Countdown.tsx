import React, { useState, useEffect, useContext } from 'react';
import { cn } from 'recn';
import { getDifference, getCurrentDay, getNextWeekday, format, getWeekday, createDate } from '../../utils';
import * as langset from './Countdown.i18n';
import * as commonLangset from '../../common/common.i18n';
import { ICounter } from '../../store/CounterStore/CounterStore.typings';

import { LanguageContext } from '../../context/LanguageContext';

import './Countdown.scss';
import { Counter } from '../Counter/Counter';
import { IClassNameProps } from '../../typings';
import { StoreContext } from '../../context/StoreContext';

export const cnCountdown = cn('Countdown');

interface ICountdownProps extends IClassNameProps { }

export const Countdown: React.FC<ICountdownProps> = React.memo(() => {
  const { locale } = useContext(LanguageContext);
  const { store } = useContext(StoreContext);

  const lang = langset[locale];
  const commonLang = commonLangset[locale];
  let currentCounter: ICounter | undefined;
  let timerId: number;
  let currentDate = getCurrentDay();
  currentCounter = store.counterStore.counters.find(counter => counter.id === store.counterStore.currentCounterId);
  const targetDate = currentCounter ? createDate(currentCounter.date) : getWeekday(currentDate);
  const targetNextDate = currentCounter ? createDate(currentCounter.date) : getNextWeekday(currentDate);
  let isFinished = targetDate.hasSame(currentDate, 'day');

  const [time, setTime] = useState(getDifference(targetNextDate, currentDate));
  const [finished, setFinished] = useState(isFinished);

  const init = () => {

  }

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