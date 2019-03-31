import React from 'react';
import { cnSidebar } from '../Sidebar';

interface ISidebarPickerProps {
  text: string;
}

export const SidebarPicker: React.FC<ISidebarPickerProps> = props => {
  const { text } = props;
  return (
    <div className={cnSidebar('Picker')}>
      <label>{text}</label>
      <input type='color' />
    </div>
  );
}