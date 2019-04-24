import { Action, IState } from "../typings";
import { saveToStorage } from "../../storage";


export const createReducer = (...reducers: ((state: IState, action: Action) => IState)[]) => {
    return (state: IState, action: Action) => {
        let result = state;

        for (let reducer of reducers) {
            result = reducer(result, action);
        }

        saveToStorage(result);

        return result;
    }
};