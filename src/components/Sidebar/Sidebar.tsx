import React, { useState } from 'react';
import { cn } from 'recn';

import './Sidebar.scss';
import { DateInput } from '../DateInput/DateInput';
import { Tab } from './Tab/Tab';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button';
import { DateForm } from '../DateForm/DateForm';
import { CounterList } from '../CounterList/CounterList';

export const cnSidebar = cn('Sidebar');

interface ISidebarProps {
  opened?: boolean;
}

const tabs = [{
  text: 'Таймеры',
  index: 0
}, {
  text: 'Настройки',
  index: 1
}]

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
      <DateForm />
      <CounterList />
      <div className={cnSidebar('TabPanel')}>
        {tabs.map(tab => (
          <Tab
            key={tab.index}
            text={tab.text}
            active={tab.index === activeTab}
            onClick={onTabClick(tab.index)} />
        ))}
      </div>
    </div>
  );
});