import React from 'react';
import { cn } from 'recn';
import { Countdown } from '../Countdown/Countdown';

import './App.scss';
import { Icon } from '../Icon/Icon';

const cnApp = cn('App');

export const App = () => {
  return <div className={cnApp()}>
    <Countdown />
    <div className={cnApp('Settings')}>
      <Icon name='settings' />
    </div>
  </div>
};
