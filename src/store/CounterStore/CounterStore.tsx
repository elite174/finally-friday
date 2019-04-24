import { IState, Action } from "../typings";
import produce from "immer";
import { CounterStoreActionTypes, CounterAddAction, CounterRemoveAction, ICounter } from "./CounterStore.typings";
export interface ICounterStore {
    counters: ICounter[];
    currentCounterId?: number;
}

export const CounterStore: ICounterStore = {
    counters: [],
    currentCounterId: 0,
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
        case CounterStoreActionTypes.changeRepeat:
            const counter = draft.counterStore.counters.find(counter => counter.id === action.payload.id);
            if (counter) {
                counter.repeatable = !counter.repeatable
            }

            return draft;
        case CounterStoreActionTypes.chooseCounter:
            draft.counterStore.currentCounterId = Number(action.payload.id);
            return draft;
        default:
            return state;
    }
});