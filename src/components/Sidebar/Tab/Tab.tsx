import React from 'react';

import { cnSidebar } from '../Sidebar';

import './Tab.scss';

interface ISidebarTabProps {
    text: string;
    active?: boolean;
    onClick(): void;
}

export const Tab: React.FC<ISidebarTabProps> = React.memo(props => {
    return (
        <div className={cnSidebar('Tab', { active: props.active })} onClick={props.onClick}>
            <span className={cnSidebar('TabText')}>{props.text}</span>
        </div>
    );
});
