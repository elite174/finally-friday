import { IColorStore } from '../ColorStore/typings';

export interface Action {
  type: string;
  payload: any;
}

export interface IState {
  colorStore: IColorStore;
}