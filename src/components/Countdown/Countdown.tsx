import React, { useState, useEffect, useContext, useMemo } from 'react';
import { cn } from 'recn';
import { getDifference, getCurrentDay, getNextWeekday, format, getWeekday, createDate } from '../../utils';
import * as langset from './Countdown.i18n';
import * as commonLangset from '../../common/common.i18n';
import { ICounter } from '../../store/CounterStore/CounterStore.typings';

import { LanguageContext } from '../../context/LanguageContext';

import './Countdown.scss';
import { Counter } from '../Counter/Counter';
import { IClassNameProps } from '../../typings';
import { Divider } from '../Divider/Divider';

export const cnCountdown = cn('Countdown');

interface ICountdownProps extends IClassNameProps {
  counter?: ICounter;
}

export const Countdown: React.FC<ICountdownProps> = React.memo((props) => {
  const { locale } = useContext(LanguageContext);
  const currentCounter = props.counter;

  let currentDate = useMemo(() => getCurrentDay(), []);
  const targetDate = useMemo(() => currentCounter ? createDate(currentCounter.date) : getWeekday(currentDate), [currentCounter]);
  const targetNextDate = useMemo(() => currentCounter ? createDate(currentCounter.date) : getNextWeekday(currentDate), [currentCounter]);
  let isFinished = targetDate.hasSame(currentDate, 'day');

  const [time, setTime] = useState(() => getDifference(targetNextDate, currentDate));
  const [finished, setFinished] = useState(() => isFinished);

  const lang = langset[locale];
  const commonLang = useMemo(() => commonLangset[locale], [locale]);

  useEffect(() => {
    const computeTime = () => {
      currentDate = getCurrentDay();
      isFinished = targetDate.hasSame(currentDate, 'day');
      setTime(getDifference(targetNextDate, currentDate));
      if (isFinished !== finished) {
        setFinished(isFinished);
      }
    }

    computeTime();
    const intervalTimerId = window.setInterval(computeTime, 1000);

    return () => clearInterval(intervalTimerId);
  }, [props.counter]);

  const remainingTime = format(time, 'dd,hh,mm,ss').split(',');
  const eventName = useMemo(() => currentCounter ? currentCounter.text : 'пятница', [props.counter]);

  return (
    <div className={cnCountdown()}>
      {finished && <div className={cnCountdown('FinalTitle')}>{`${lang.finally} ${eventName}!`}</div>}
      <div className={cnCountdown('Title')}>{`${eventName} ${lang.in}:`}</div>
      <Divider />
      <div className={cnCountdown('RemainingTime')}>
        <Counter unit={commonLang.days} value={Number(remainingTime[0]) > 999 ? '∞' : remainingTime[0]} />
        <Counter unit={commonLang.hours} value={remainingTime[1]} />
        <Counter unit={commonLang.minutes} value={remainingTime[2]} />
        <Counter unit={commonLang.seconds} value={remainingTime[3]} />
      </div>
    </div>
  );
});