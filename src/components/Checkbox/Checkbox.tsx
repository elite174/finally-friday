import React from 'react';
import { IClassNameProps } from '../../typings';
import { cn } from 'recn';

import './Checkbox.scss';

interface ICheckboxProps extends IClassNameProps {
    checked?: boolean;
    label: string;
    forwardRef: React.Ref<HTMLInputElement>;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const cnCheckbox = cn('Checkbox');

export const Checkbox: React.FC<ICheckboxProps> = React.memo(props => (
    <div className={cnCheckbox(null, [props.className])}>
        <label className={cnCheckbox('Label')}>{props.label}</label>
        <input
            className={cnCheckbox('Input')}
            onChange={props.onChange}
            type='checkbox'
            ref={props.forwardRef} />
    </div>

))