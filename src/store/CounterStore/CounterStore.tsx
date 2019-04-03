import { DateTime } from "luxon";
import { IState, Action } from "../typings";
import produce from "immer";
import { CounterStoreActionTypes, CounterAddAction, CounterRemoveAction } from "./CounterStore.typings";

interface ICounter {
    date: DateTime;
    text: string;
    id: number;
}

export interface ICounterStore {
    counters: ICounter[];
}

export const CounterStore: ICounterStore = {
    counters: []
}

export const counterReducer = (state: IState, action: Action) => produce(state, draft => {
    switch (action.type) {
        case CounterStoreActionTypes.add:
            draft.counterStore.counters.push({
                id: Math.random(),
                text: (action as CounterAddAction).payload.text,
                date: (action as CounterAddAction).payload.date,
            });
            return draft;
        case CounterStoreActionTypes.remove:
            draft.counterStore.counters = draft.counterStore.counters
                .filter(counter => counter.id !== (action as CounterRemoveAction).payload);
            return draft;
        default:
            return state;
    }
});