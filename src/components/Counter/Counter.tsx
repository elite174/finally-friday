import React from 'react';

import './Counter.scss';
import { cn } from 'recn';

const cnCounter = cn('Counter');

interface ICounterProps {
    value: string | number;
    unit: string;
}

export const Counter: React.FC<ICounterProps> = React.memo(props => (
    <div className={cnCounter()}>
        <div className={cnCounter('Unit')}>{props.unit}</div>
        <div className={cnCounter('Value')}>{props.value}</div>
    </div>
));