import React, { useState } from 'react';
import { cn } from 'recn';

import { Icon } from '../Icon/Icon';
import { DateForm } from '../DateForm/DateForm';
import { CounterList } from '../CounterList/CounterList';
import { TabPanel } from '../TabPanel/TabPanel';
import { Divider } from '../Divider/Divider';

import './Sidebar.scss';

export const cnSidebar = cn('Sidebar');

interface ISidebarProps {
  opened?: boolean;
}

export const Sidebar: React.FC<ISidebarProps> = React.memo(() => {
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const onTabClick = (tabIndex: number) => () => setActiveTab(tabIndex);

  const onSettingsClick = () => {
    setSidebarOpened(!sidebarOpened);
  }

  const timerPage = <>
    <CounterList />
    <Divider className={cnSidebar('Item')} />
    <DateForm className={cnSidebar('Bottom')} />
  </>;

  return (
    <div className={cnSidebar({ opened: sidebarOpened })}>
      <Icon name='settings' className={cnSidebar('Menu')} onIconClick={onSettingsClick} />
      <TabPanel
        tabs={[
          {
            content: timerPage,
            text: 'Таймеры',
            onClick: onTabClick(0),
            active: activeTab === 0,
          },
        ]} />
    </div>
  );
});