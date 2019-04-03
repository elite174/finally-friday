import { IColorStore } from '../ColorStore/typings';
import { ISettingsStore } from '../SettingsStore/typings';
import { ICounterStore } from '../CounterStore/CounterStore';

export interface Action {
  type: string;
  payload: any;
}

export interface IState {
  colorStore: IColorStore;
  settingsStore: ISettingsStore;
  counterStore: ICounterStore;
}