import React, { useState } from 'react';
import {useParams} from "react-router-dom";

function TabsLayout({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleClick = (tabId) => {
        setActiveTab(tabId);
    }

    return (
        <div>
            <ul>
                {tabs.map(tab => (
                    <li key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => handleClick(tab.id)}>
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div>
                {tabs.map(tab => (
                    <div key={tab.id} className={activeTab === tab.id ? 'active' : 'hidden'}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TabsRender(){

    const {id } = useParams();

    const tabs = [
        { id: 1, label: 'Tab 1', content: 'Content 1' },
        { id: 2, label: 'Tab 2', content: 'Content 2' },
        { id: 3, label: 'Tab 3', content: 'Content 3' },
    ];

    return (
        <TabsLayout tabs={tabs} />
    );
}

export default TabsRender