import React, { useContext } from 'react';
import { cn } from 'recn';
import { StoreContext } from '../../context/StoreContext';

import './CounterList.scss';

const cnCounterList = cn('CounterList');

export const CounterList = React.memo(() => {
    const { store } = useContext(StoreContext);
    const counters = [...store.counterStore.counters];

    return (
        <div className={cnCounterList()}>
            {counters.sort((a, b) => a.date.toMillis() - b.date.toMillis()).map(counter => (
                <div className={cnCounterList('Item')} key={counter.id}>
                    <div className={cnCounterList('Title')}>{counter.text}</div>
                    <div className={cnCounterList('Date')}>{counter.date.toSQLDate()}</div>
                </div>
            ))}
        </div>
    );
});