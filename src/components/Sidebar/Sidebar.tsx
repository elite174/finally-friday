import React, { useState } from 'react';
import { cn } from 'recn';

import './Sidebar.scss';
import { Icon } from '../Icon/Icon';
import { DateForm } from '../DateForm/DateForm';
import { CounterList } from '../CounterList/CounterList';
import { TabPanel } from '../TabPanel/TabPanel';

export const cnSidebar = cn('Sidebar');

interface ISidebarProps {
  opened?: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = React.memo((props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const onTabClick = (tabIndex: number) => () => setActiveTab(tabIndex);

  const onSettingsClick = () => {
    setSidebarOpened(!sidebarOpened);
  }

  return (
    <div className={cnSidebar({ opened: sidebarOpened })}>
      <Icon name='settings' className={cnSidebar('Menu')} onIconClick={onSettingsClick} />
      <TabPanel
        tabs={[
          {
            content: <>
              <DateForm />
              <CounterList />
            </>,
            text: 'Таймеры',
            onClick: onTabClick(0),
            active: activeTab === 0,
          },
          {
            content: null,
            text: 'Настройки',
            onClick: onTabClick(1),
            active: activeTab === 1,
          }
        ]} />
    </div>
  );
});