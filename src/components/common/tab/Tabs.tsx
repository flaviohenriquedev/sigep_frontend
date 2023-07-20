'use client';

import { useState } from 'react';
import styles from './Tabs.module.css';
import { TabsProps } from '@/@types/global/GlobalTypes';

const Tabs = ({ tabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <div className={styles.tab_container}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`${styles.tab} ${
                            activeTab === index ? styles.active : ''
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>{tabs[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
