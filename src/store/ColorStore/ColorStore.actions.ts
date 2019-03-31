import { Action } from "../typings";

export interface IChangeColorAction extends Action {
  type: 'color: change',
  payload: number;
}