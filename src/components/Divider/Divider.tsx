import React from 'react';
import { cn } from 'recn';

import './Divider.scss';

const cnDivider = cn('Divider');

export const Divider = React.memo(() => (
    <div className={cnDivider()} />
));