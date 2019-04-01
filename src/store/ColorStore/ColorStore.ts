import { IState } from "../typings";
import produce from 'immer';

import { IColorStore, ColorStoreActions } from './typings';
import { ColorActions } from "./actions";

export const ColorStore: IColorStore = {
  primary: 250
}

export const colorReducer = (state: IState, action: ColorActions) => produce(state, draft => {
  switch (action.type) {
    case ColorStoreActions.change:
      draft.colorStore.primary = action.payload;
      return draft;
      break;
    default:
      return draft;
  }
});