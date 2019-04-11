import React from 'react';
import { noop } from '../utils';
import { Locales } from '../utils/i18n';

interface ILanguageContext {
    locale: Locales;
    setLocale(locale: Locales): void;
}

export const LanguageContext = React.createContext<ILanguageContext>({ locale: Locales.ru, setLocale: noop });