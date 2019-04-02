import React from 'react';
import { IState } from '../store/typings';
import { initialState } from '../store';
import { noop } from '../utils';

interface IStoreContext {
    store: IState;
    dispatch: (args: any) => void;
}

export const StoreContext = React.createContext<IStoreContext>({ store: initialState, dispatch: noop });