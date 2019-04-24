import React from 'react';
import { cn } from 'recn';

import { IClassNameProps } from '../../typings';

import './Icon.scss';

export interface IIconProps extends IClassNameProps {
    name: string;
    iconStyle?: 'ios' | 'md';
    onIconClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

const cnIcon = cn('Icon');

export const Icon: React.FC<IIconProps> = React.memo(props => {
    const { onIconClick, style, iconStyle = 'md', name, className } = props;

    return (
        <i
            onClick={onIconClick}
            style={style}
            className={cnIcon(null, [`ion-${iconStyle}-${name}`, className])} />
    );
});