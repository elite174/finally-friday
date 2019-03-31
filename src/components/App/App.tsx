import React from 'react';
import { cn } from 'recn';
import { Countdown } from '../Countdown/Countdown';

import './App.scss';

const cnApp = cn('App');

export const App = () => {
  return <div className={cnApp()}>
    <Countdown />
  </div>
};
