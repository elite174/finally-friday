export interface ISettingsStore {
    /** Display months */
    withMonths: boolean;
    /** Display years */
    withYears: boolean;
}

export enum SettingsStoreActionTypes {
    toggleMonths = 'settings:toggleMonths',
    toggleYears = 'settings: toggleYears'
}