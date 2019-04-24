import React from 'react';
import { cn } from 'recn';

import { IIconProps, Icon } from '../Icon/Icon';
import { IClassNameProps } from '../../typings';

import './Button.scss';

export interface IButtonProps extends IClassNameProps {
  onButtonClick?: (e: React.MouseEvent) => void;
  hint?: string;
  text?: string;
  icon?: IIconProps;
  disabled?: boolean;
}

export const cnButton = cn('Button');

export const Button: React.FC<IButtonProps> = React.memo(props => {
  const { className, onButtonClick, text, icon, disabled } = props;
  return (
    <button
      disabled={disabled}
      className={cnButton({ disabled }, [className])}
      onClick={onButtonClick}>
      {text}
      {icon && <Icon {...icon} className={cnButton('Icon')} />}
    </button>
  );
}); 