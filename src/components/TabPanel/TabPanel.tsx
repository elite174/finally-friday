import React from 'react';
import { IClassNameProps } from '../../typings';
import { cn } from 'recn';

import './TabPanel.scss';

interface ITabProps {
    text: string;
    active?: boolean;
    onClick(): void;
    content: JSX.Element | null;
}

interface ITabPanelProps extends IClassNameProps {
    tabs: ITabProps[];
}

const cnTabPanel = cn('TabPanel');

export const TabPanel: React.FC<ITabPanelProps> = React.memo(props => {
    return (
        <div className={cnTabPanel(null, [props.className])}>
            <div className={cnTabPanel('Navigation')}>
                {props.tabs.map((tab, index) => (
                    <span
                        key={index}
                        className={cnTabPanel('TabText', { active: tab.active })}
                        onClick={tab.onClick}>{tab.text}</span>
                ))}
            </div>
            <div className={cnTabPanel('Content')}>
                {props.tabs.find(tab => Boolean(tab.active))!.content}
            </div>
        </div>
    )
});