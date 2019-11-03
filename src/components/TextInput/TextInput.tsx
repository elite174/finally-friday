import React from 'react';
import { cn } from 'recn';

import './TextInput.scss';
import { IClassNameProps } from '../../typings';

interface ITextInputProps extends IClassNameProps {
    onChange?(e?: React.ChangeEvent<HTMLInputElement>): void;
    defaultValue?: string;
    forwardRef: React.RefObject<HTMLInputElement>;
    caption: string;
    placeholder?: string;
}

const cnTextInput = cn('TextInput');

export const TextInput: React.FC<ITextInputProps> = React.memo(props => {
    const { defaultValue, forwardRef, caption, placeholder, onChange } = props;

    return (
        <div className={cnTextInput(null, [props.className])}>
            <label className={cnTextInput('Label')}>{caption}</label>
            <input tabIndex={-1} onChange={onChange} className={cnTextInput('Input')} defaultValue={defaultValue} ref={forwardRef} placeholder={placeholder} />
        </div>
    );
});