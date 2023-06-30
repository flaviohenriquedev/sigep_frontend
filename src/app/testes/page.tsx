"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./page.module.css";

import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import BiddingPage from "../manager/shopping/register/bidding/page";

const Testes = () => {
    const tabs = [
        { id: 1, description: "TAB 1" },
        { id: 2, description: "TAB 2" },
        { id: 3, description: "TAB 3" },
    ];

    const [tabIndex, setTabIndex] = useState(0);
    console.log("TABINDEX", tabIndex);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    function renderTabs() {
        return tabs.map((tab) => {
            return (
                <>
                    <button
                        key={tab.id}
                        className={`${styles.tabs} ${
                            toggleState === tab.id
                                ? styles.active_tabs
                                : styles.tabs
                        }`}
                        onClick={() => toggleTab(tab.id)}
                    >
                        {tab.description}
                    </button>
                </>
            );
        });
    }

    function renderContent() {
        return (
            <div
                className={`${styles.content} ${
                    toggleState === 1
                        ? styles.active_content
                        : styles.content
                }`}
            >
                <BiddingPage />
            </div>
        )
    }

    return (
        <div style={{ marginTop: "10rem" }}>
            {/* <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs> */}


            <div className={styles.container}>
                <div className={styles.bloc_tabs}>{renderTabs()}</div>

                <div className={styles.content_tabs}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Testes;
