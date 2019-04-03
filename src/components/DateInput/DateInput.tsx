import React, { useState } from 'react';
import { cn } from 'recn';
import { Dropdown } from '../Dropdown/Dropdown';

const cnDateInput = cn('DateInput');

export const DateInput = () => {
    const dayRef = React.createRef<HTMLSelectElement>();
    return (
        <div className={cnDateInput()}>
            <Dropdown caption={'день'} options={['1', '2', '3']} forwardRef={dayRef} selected={'2'} />
        </div>
    )
}