export enum Locales {
    ru = 'ru'
};

export const useLang = (langset: Record<string, object>, locale = Locales.ru) => {
    return langset[locale];
};

