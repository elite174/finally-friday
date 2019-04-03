import { ISettingsStore, SettingsStoreActionTypes } from "./typings";
import { IState, Action } from "../typings";
import produce from "immer";

export const SettingsStore: ISettingsStore = {
    withMonths: false,
    withYears: false,
}

export const settingsReducer = (state: IState, action: Action) => produce(state, draft => {
    switch (action.type) {
        case SettingsStoreActionTypes.toggleMonths:
            draft.settingsStore.withMonths = !draft.settingsStore.withMonths
            return draft;
        case SettingsStoreActionTypes.toggleYears:
            draft.settingsStore.withMonths = !draft.settingsStore.withYears || draft.settingsStore.withMonths;
            draft.settingsStore.withYears = !draft.settingsStore.withYears;
            return draft;
        default:
            return draft;
    }
});