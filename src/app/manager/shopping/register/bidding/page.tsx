"use client";

import BiddingBasicInformationPage from "./basic_information/page";
import { useState } from "react";
import BiddingFiles from "./files/page";

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

function TabPanel({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

function Tabs({ tabs }: TabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={activeTab === index ? "active" : ""}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{tabs[activeTab].content}</div>
        </div>
    );
}

export default function BiddingPage() {
    const tabs: Tab[] = [
        {
            label: "Dados Básicos",
            content: (
                <div>
                    <BiddingBasicInformationPage />
                </div>
            ),
        },
        {
            label: "Arquivos",
            content: (
                <div>
                    <BiddingFiles />
                </div>
            ),
        },
    ];

    return <Tabs tabs={tabs} />;
}
