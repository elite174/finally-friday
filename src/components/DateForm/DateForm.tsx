import React, { useContext, useState } from 'react';
import { DateInput } from '../DateInput/DateInput';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button';
import { cn } from 'recn';
import { StoreContext } from '../../context/StoreContext';
import { getCurrentDay } from '../../utils';
import { DateTime } from 'luxon';
import {
    CounterStoreActionTypes,
    CounterAddAction
} from '../../store/CounterStore/CounterStore.typings';
import './DateForm.scss';
import { Checkbox } from '../Checkbox/Checkbox';
import { IClassNameProps } from '../../typings';

const cnDateForm = cn('DateForm');

export const DateForm: React.FC<IClassNameProps> = React.memo((props) => {
    const { dispatch } = useContext(StoreContext);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const titleRef = React.createRef<HTMLInputElement>();
    const dateRef = React.createRef<HTMLInputElement>();
    const repeatRef = React.createRef<HTMLInputElement>();

    const reset = () => {
        if (!dateRef.current || !titleRef.current) {
            return;
        }

        titleRef.current.value = '';
        dateRef.current.value = getCurrentDay().toSQLDate() || '';
        onInputChange();
        //repeatRef.current.checked = false;
    };

    const onInputChange = () => {
        if (!dateRef.current || !titleRef.current) {
            return;
        }

        const targetDate = DateTime.fromSQL(dateRef.current.value);
        const currentDate = getCurrentDay();
        if (
            !targetDate.isValid ||
            targetDate < currentDate ||
            titleRef.current.value === ''
        ) {
            if (!buttonDisabled) {
                setButtonDisabled(true);
                return;
            }
        } else {
            if (buttonDisabled) {
                setButtonDisabled(false);
                return;
            }
        }
    };

    const onButtonClick = () => {
        if (!dateRef.current || !titleRef.current) {
            return;
        }

        const targetDate = DateTime.fromSQL(dateRef.current.value);

        dispatch({
            type: CounterStoreActionTypes.add,
            payload: {
                text: titleRef.current.value,
                date: targetDate.toSQLDate()
            }
        } as CounterAddAction);
        reset();
    };

    return (
        <div className={cnDateForm(null, [props.className])}>
            <TextInput
                onChange={onInputChange}
                className={cnDateForm('Input')}
                forwardRef={titleRef}
                caption={'Введите название события'}
                placeholder='День рождения Саши'
            />
            <DateInput
                onChange={onInputChange}
                className={cnDateForm('Input')}
                forwardRef={dateRef}
                caption={'Введите дату'}
                date={getCurrentDay()}
            />
            {false && (
                <Checkbox
                    className={cnDateForm('Input')}
                    forwardRef={repeatRef}
                    label={'Повторять?'}
                    checked={false}
                />
            )}
            <Button
                text='Добавить'
                onButtonClick={onButtonClick}
                disabled={buttonDisabled}
            />
        </div>
    );
});
