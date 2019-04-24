import React, { useContext } from 'react';
import { cn } from 'recn';
import { StoreContext } from '../../context/StoreContext';

import './CounterList.scss';
import { CounterStoreActionTypes } from '../../store/CounterStore/CounterStore.typings';
import { CounterListCounter } from './Counter/CounterList-Counter';

export const cnCounterList = cn('CounterList');

export const CounterList = React.memo(() => {
    const { store, dispatch } = useContext(StoreContext);
    const counters = [...store.counterStore.counters];

    return (
        <div className={cnCounterList()}>
            {counters.sort((a, b) => a.date < b.date ? -1 : 0).map(counter => (
                <CounterListCounter
                    key={counter.id}
                    onClick={() => dispatch({ type: CounterStoreActionTypes.chooseCounter, payload: { id: counter.id } })}
                    remove={() => dispatch({ type: CounterStoreActionTypes.remove, payload: counter.id })}
                    active={counter.id === store.counterStore.currentCounterId}
                    text={counter.text}
                    date={counter.date} />
            ))}
        </div>
    );
});