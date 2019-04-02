import React from 'react';
import { cn } from 'recn';

import './Sidebar.scss';
import { DateInput } from '../DateInput/DateInput';

export const cnSidebar = cn('Sidebar');

interface ISidebarProps {
  opened?: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = React.memo((props) => {
  return (
    <div className={cnSidebar({ opened: props.opened })}>
      <DateInput />
    </div>
  );
});