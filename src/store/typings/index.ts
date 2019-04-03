import { IColorStore } from '../ColorStore/typings';
import { ISettingsStore } from '../SettingsStore/typings';

export interface Action {
  type: string;
  payload: any;
}

export interface IState {
  colorStore: IColorStore;
  settingsStore: ISettingsStore;
}