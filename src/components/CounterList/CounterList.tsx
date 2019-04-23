import React, { useContext } from 'react';
import { cn } from 'recn';
import { StoreContext } from '../../context/StoreContext';

import './CounterList.scss';
import { CounterStoreActionTypes } from '../../store/CounterStore/CounterStore.typings';

const cnCounterList = cn('CounterList');

export const CounterList = React.memo(() => {
    const { store, dispatch } = useContext(StoreContext);
    const counters = [...store.counterStore.counters];

    return (
        <div className={cnCounterList()}>
            {counters.sort((a, b) => a.date < b.date ? -1 : 0).map(counter => (
                <div
                    onClick={() => dispatch({ type: CounterStoreActionTypes.chooseCounter, payload: { id: counter.id } })}
                    className={cnCounterList('Item')}
                    key={counter.id}>
                    <div className={cnCounterList('Title')}>{counter.text}</div>
                    <div className={cnCounterList('Date')}>{counter.date}</div>
                </div>
            ))}
        </div>
    );
});