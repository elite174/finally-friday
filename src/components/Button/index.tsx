import React from 'react';
import { cn } from 'recn';

import { IClassNameProps } from '../../typings';

import './Button.scss';


const cnButton = cn('Button');

interface IButtonProps extends IClassNameProps {
  onClick?(): void;
  text: string;
}

export const Button: React.FC<IButtonProps> = props => {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} className={cnButton(null, [props.className])}>{text}</button>
  );
};