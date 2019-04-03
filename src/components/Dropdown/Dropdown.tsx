import React from 'react';
import { cn } from 'recn';
import { IClassNameProps } from '../../typings';

import './Dropdown.scss';

interface IDropdownProps extends IClassNameProps {
    options: string[];
    selected: string;
    forwardRef: React.Ref<HTMLSelectElement>;
    caption: string;
}

const cnDropdown = cn('Dropdown');

export const Dropdown: React.FC<IDropdownProps> = React.memo((props) => {
    const { options, selected, forwardRef, className, caption } = props;

    return (
        <div className={cnDropdown(null, [className])}>
            <label className={cnDropdown('Label')}>{caption}</label>
            <select className={cnDropdown('Select')} ref={forwardRef}>
                {options.map(option => (
                    <option key={option} selected={option === selected}>{option}</option>
                ))}
            </select>
        </div>

    )
});