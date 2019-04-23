import { Action } from "../../typings";

export enum CounterStoreActionTypes {
    add = 'counters:add',
    remove = 'counters:remove',
    changeRepeat = 'counters:changeRepeat',
    chooseCounter = 'counters:chooseCounter',
}

export interface ICounter {
    date: string;
    text: string;
    id: number;
    repeatable?: boolean;
}

export interface CounterAddAction extends Action {
    payload: {
        text: string;
        date: string;
    }
};

export interface CounterRemoveAction extends Action {
    payload: number;
}