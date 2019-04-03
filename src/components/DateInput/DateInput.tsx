import React, { useState, useReducer } from 'react';
import { cn } from 'recn';
import { getCurrentDay } from '../../utils';

import './DateInput.scss';
import { DateTime } from 'luxon';

const cnDateInput = cn('DateInput');

export const DateInput = () => {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

    const date = getCurrentDay();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       // DateTime.fromString()
        console.log(DateTime.fromSQL(e.target.value));
    }

    return (
        <div className={cnDateInput()}>
            <label className={cnDateInput('Label')}>Выберите дату</label>
            <input type='date' className={cnDateInput('Input')} onChange={onChange} />
        </div>
    )
}