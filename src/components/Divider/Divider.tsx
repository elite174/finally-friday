import React from 'react';
import { cn } from 'recn';

import './Divider.scss';
import { IClassNameProps } from '../../typings';

const cnDivider = cn('Divider');

export const Divider: React.FC<IClassNameProps> = React.memo((props) => (
    <div className={cnDivider(null, [props.className])} />
));