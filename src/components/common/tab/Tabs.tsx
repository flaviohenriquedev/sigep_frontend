'use client'

import { TabsProps } from '@/@types/shopping/ShoppingTypes';
import {useState} from 'react'
import styles from './Tabs.module.css'

function TabPanel({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

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
                        className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>{tabs[activeTab].content}</div>
        </div>
    );
}

export default Tabs;