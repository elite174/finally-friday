import React, { useContext } from 'react';
import { DateInput } from '../DateInput/DateInput';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button';
import { cn } from 'recn';
import { StoreContext } from '../../context/StoreContext';
import { getCurrentDay } from '../../utils';
import { DateTime } from 'luxon';
import { CounterStoreActionTypes, CounterAddAction } from '../../store/CounterStore/CounterStore.typings';
import './DateForm.scss';
import { Checkbox } from '../Checkbox/Checkbox';

const cnDateForm = cn('DateForm');

export const DateForm: React.FC = React.memo(() => {
    const { dispatch } = useContext(StoreContext);

    const titleRef = React.createRef<HTMLInputElement>();
    const dateRef = React.createRef<HTMLInputElement>();
    const repeatRef = React.createRef<HTMLInputElement>();

    const reset = () => {
        if (!dateRef.current || !titleRef.current || !repeatRef.current) {
            return;
        }

        titleRef.current.value = '';
        dateRef.current.value = getCurrentDay().toSQL();
        repeatRef.current.checked = false;
    }

    const handleError = () => {
        reset();
    }

    const onButtonClick = () => {
        if (!dateRef.current || !titleRef.current) {
            return;
        }

        const targetDate = DateTime.fromSQL(dateRef.current.value);
        const currentDate = getCurrentDay();
        if (targetDate < currentDate || titleRef.current.value === '') {
            handleError();
            return;
        }

        dispatch({
            type: CounterStoreActionTypes.add,
            payload: { text: titleRef.current.value, date: targetDate.toSQLDate() }
        } as CounterAddAction);
        reset();
    }

    return (
        <div className={cnDateForm()}>
            <TextInput className={cnDateForm('Input')} forwardRef={titleRef} caption={'Введите название события'} placeholder='День рождения Саши' />
            <DateInput className={cnDateForm('Input')} forwardRef={dateRef} caption={'Введите дату'} date={getCurrentDay()} />
            <Checkbox  className={cnDateForm('Input')} forwardRef={repeatRef} label={'Повторять?'} checked={false} />
            <Button text="Добавить" onButtonClick={onButtonClick} />
        </div>
    )
})