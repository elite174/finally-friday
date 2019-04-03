import { ColorStore, colorReducer } from "./ColorStore/ColorStore";
import { IState } from './typings';
import { createReducer } from "./utils";
import { settingsReducer, SettingsStore } from "./SettingsStore/SettingsStore";

export const initialState: IState = {
  colorStore: ColorStore,
  settingsStore: SettingsStore,
}

export const rootReducer = createReducer([
  colorReducer,
  settingsReducer
]);