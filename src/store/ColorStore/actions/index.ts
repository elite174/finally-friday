import { Action } from "../../typings";

export interface IChangeColorAction extends Action {
  payload: number;
}

export type ColorActions = IChangeColorAction;