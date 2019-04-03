import React, { useReducer, useState } from 'react';
import { cn } from 'recn';

import { Countdown } from '../Countdown/Countdown';
import { Icon } from '../Icon/Icon';
import { rootReducer, initialState } from '../../store';
import { StoreContext } from '../../context/StoreContext';

import './App.scss';
import { ColorStoreActions } from '../../store/ColorStore/typings';
import { Theme } from '../Theme/Theme';
import { Sidebar } from '../Sidebar/Sidebar';

const cnApp = cn('App');

export const App = () => {
  const [store, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <div className={cnApp()}>
        <Theme />
        <Countdown />
        <Sidebar />
      </div>
    </StoreContext.Provider>
  );
};
