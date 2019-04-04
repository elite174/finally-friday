import React, { useState, useReducer } from 'react';
import { cn } from 'recn';
import { getCurrentDay, noop } from '../../utils';

import './DateInput.scss';
import { DateTime } from 'luxon';
import { IClassNameProps } from '../../typings';

const cnDateInput = cn('DateInput');

interface IDateInputProps extends IClassNameProps {
    caption: string;
    date?: DateTime;
    forwardRef: React.RefObject<HTMLInputElement>;
    onChange?(): void;
}

export const DateInput: React.FC<IDateInputProps> = React.memo(props => {
    const { forwardRef, caption, date, onChange = noop } = props;

    return (
        <div className={cnDateInput(null, [props.className])}>
            <label className={cnDateInput('Label')}>{caption}</label>
            <input type='date' ref={forwardRef} defaultValue={date && date.toSQLDate()} className={cnDateInput('Input')} onChange={onChange} />
        </div>
    )
});