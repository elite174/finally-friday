import { Action } from "../../typings";
import { DateTime } from "luxon";

export enum CounterStoreActionTypes {
    add = 'counters:add',
    remove = 'counters:remove'
}

export interface CounterAddAction extends Action {
    payload: {
        text: string;
        date: DateTime;
    }
};

export interface CounterRemoveAction extends Action {
    payload: number;
}