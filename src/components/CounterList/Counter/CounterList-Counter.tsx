import React from 'react';
import { cnCounterList } from '../CounterList';

import './CounterList-Counter.scss';
import { Icon } from '../../Icon/Icon';

interface ICounterListCounterProps {
    onClick(): void;
    remove(): void;
    text: string;
    date: string;
    active?: boolean;
}

export const CounterListCounter: React.FC<ICounterListCounterProps> = React.memo((props) => {
    const onRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.remove();
    }

    return (
        <div onClick={props.onClick} className={cnCounterList('Counter', { active: props.active })}>
            <div className={cnCounterList('Title')}>{props.text}</div>
            <div className={cnCounterList('Date')}>{props.date}</div>
            <Icon onIconClick={onRemoveClick} name='trash' className={cnCounterList('RemoveButton')} />
        </div>
    )
});