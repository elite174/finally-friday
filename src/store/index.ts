import { IState } from './typings';
import { createReducer } from "./utils";
import { ColorStore, colorReducer } from "./ColorStore/ColorStore";
import { settingsReducer, SettingsStore } from "./SettingsStore/SettingsStore";
import { CounterStore, counterReducer } from "./CounterStore/CounterStore";

export const initialState: IState = {
  colorStore: ColorStore,
  settingsStore: SettingsStore,
  counterStore: CounterStore,
}

export const rootReducer = createReducer(
  colorReducer,
  settingsReducer,
  counterReducer,
);