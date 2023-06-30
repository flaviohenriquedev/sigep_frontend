'use client'

import { useState } from 'react';
import BiddingPage from '../manager/shopping/register/bidding/page';
import DispensationBiddingPage from '../manager/shopping/register/dispensation_bidding/page';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function TabPanel({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
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
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default function MyPage() {
  const tabs: Tab[] = [
    {
      label: 'Dados Básicos',
      content: (
        <div>
          <BiddingPage />
        </div>
      )
    },
    {
        label: 'Dados Básicos',
        content: (
          <div>
            <DispensationBiddingPage />
          </div>
        )
      },
    // Adicione mais objetos de aba conforme necessário
  ];

  return (
    <div style={{marginTop: '10rem'}}>
      <Tabs tabs={tabs} />
    </div>
  );
}
