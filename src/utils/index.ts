import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ru';
import { Days } from '../typings';

dayjs.locale('ru')
dayjs.extend(utc);

export const getCurrentDay = () => dayjs();
/**
 * Returns the difference between two dates
 */
export const getDifference = (targetDate: Dayjs, currentDate: Dayjs) => {
  return dayjs(targetDate.diff(currentDate, 'millisecond')).utc();
}

/**
 * Returns the beginning of the day
 */
export const setStartOfDay = (date: Dayjs) => date.startOf('day');

/**
 * Returns the next day [e.g. next friday, next tueday] of a week 
 */
export const getNextDay = (currentDate: Dayjs, day: Days = Days.friday) => {
  let nextDay = setStartOfDay(currentDate.set('day', day));
  if (nextDay.isBefore(currentDate)) {
    nextDay = setStartOfDay(currentDate.add(7, 'day'));
  }

  return nextDay;
}

export const format = (date: Dayjs, template: string) => date.format(template);

export const noop = () => { };