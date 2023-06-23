'use client'

import {SideBarContextProvider} from "@/context/layout/SideBarContext";
import styles from "./PageLayout.module.css";

import PageHeader from "./header/PageHeader";
import PageMain from "./main/PageMain";
import PageSidebar from "./sidebar/PageSidebar";

type PageLayoutProps = {
    children: any;
    menuItems: any[];
    pageHeader: string;
};

const PageLayout = (props: PageLayoutProps) => {

    return (
        <div className={styles.pagelayout_container}>
            <PageHeader pageHeader={props.pageHeader}/>
            <SideBarContextProvider>
                <div className={styles.sidebar_and_main}>
                    <PageSidebar
                        data={props.menuItems}
                    />
                    <PageMain>{props.children}</PageMain>
                </div>
            </SideBarContextProvider>
        </div>
    );
};

export default PageLayout;
