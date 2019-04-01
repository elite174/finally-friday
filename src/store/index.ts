import { ColorStore, colorReducer } from "./ColorStore/ColorStore";
import { IState } from './typings';
import { createReducer } from "./utils";

export const initialState: IState = {
  colorStore: ColorStore
}

export const rootReducer = createReducer([
  colorReducer
]);