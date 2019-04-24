import React, { useReducer, useState } from 'react';
import { cn } from 'recn';

import { Countdown } from '../Countdown/Countdown';
import { rootReducer, initialState } from '../../store';
import { StoreContext } from '../../context/StoreContext';

import './App.scss';
import { Theme } from '../Theme/Theme';
import { Sidebar } from '../Sidebar/Sidebar';
import { Locales } from '../../utils/i18n';
import { LanguageContext } from '../../context/LanguageContext';
import { Icon } from '../Icon/Icon';
import { CounterStoreActionTypes } from '../../store/CounterStore/CounterStore.typings';

const cnApp = cn('App');

export const App = () => {
  const [store, dispatch] = useReducer(rootReducer, initialState);
  const [locale, setLocale] = useState(Locales.ru);
  const currentCounter = store.counterStore.counters.find(c => c.id === store.counterStore.currentCounterId);

  const onFridayIconClick = () => dispatch({ type: CounterStoreActionTypes.chooseCounter, payload: { id: undefined } });
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <StoreContext.Provider value={{ store, dispatch }}>
        <div className={cnApp()}>
          <Theme />
          <Countdown counter={currentCounter} />
          <Sidebar />
          <Icon className={cnApp('FridayIcon')} onIconClick={onFridayIconClick} name='flame' />
        </div>
      </StoreContext.Provider>
    </LanguageContext.Provider>
  );
};
