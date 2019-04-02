import { Days } from '../typings';
import { DateTime, Duration } from 'luxon';

export const getCurrentDay = () => DateTime.local();
/**
 * Returns the difference between two dates
 */
export const getDifference = (targetDate: DateTime, currentDate: DateTime) => {
  return targetDate.diff(currentDate);
}

/**
 * Returns the beginning of the day
 */
export const setStartOfDay = (date: DateTime) => date.startOf('day');

/**
 * Returns the next day [e.g. next friday, next tueday] of a week 
 */
export const getNextDay = (currentDate: DateTime, weekday: Days = Days.friday) => {
  let nextDay = setStartOfDay(currentDate.set({ weekday }));
  if (nextDay < currentDate) {
    nextDay = setStartOfDay(currentDate.plus({ days: 7 }));
  }

  return nextDay;
}

export const format = (date: DateTime | Duration, template: string) => date.toFormat(template);