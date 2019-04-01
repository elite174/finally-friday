import React, { useReducer } from 'react';
import { cn } from 'recn';

import { Countdown } from '../Countdown/Countdown';
import { Icon } from '../Icon/Icon';
import { rootReducer, initialState } from '../../store';
import { StoreContext } from '../../context/StoreContext';

import './App.scss';
import { ColorStoreActions } from '../../store/ColorStore/typings';

const cnApp = cn('App');

export const App = () => {
  const [store, dispatch] = useReducer(rootReducer, initialState);

  const cssVars = `
    .App{
      --primaryHue: ${store.colorStore.primary}
    }
  `;

  const onSettingsClick = () => {
    dispatch({ type: ColorStoreActions.change, payload: Math.round(Math.random() * 360) });
  }

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <div className={cnApp()}>
        <style>
          {cssVars}
        </style>
        <Countdown />
        <div className={cnApp('Settings')}>
          <Icon name='settings' onIconClick={onSettingsClick} />
        </div>
      </div>
    </StoreContext.Provider>
  );
};
