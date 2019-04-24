import { IState } from "../store/typings";
import { initialState } from "../store";

const storeKey = 'ffStore$';

export const saveToStorage = (store: IState) => {
    window.localStorage.setItem(storeKey, JSON.stringify(store));
}

export const loadFromStorage = (): IState => {
    const storeData = window.localStorage.getItem(storeKey);
    if (!storeData) {
        return initialState;
    }

    let store: Partial<IState>;
    try {
        store = JSON.parse(storeData);
    } catch (err) {
        return initialState;
    }

    return {
        colorStore: store.colorStore ? store.colorStore : initialState.colorStore,
        counterStore: store.counterStore ? store.counterStore : initialState.counterStore,
        settingsStore: store.settingsStore ? store.settingsStore : initialState.settingsStore
    }
}