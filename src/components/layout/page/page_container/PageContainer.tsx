"use client";

import styles from "./PageContainer.module.css";

import PageHeader from "../header/PageHeader";
import PageSidebar from "../sidebar/PageSidebar";

type PageContainerProps = {
    children: any;
    menuItems: any[];
    pageTittle: string;
};

const PageContainer = (props: PageContainerProps) => {
    return (
        <div className={styles.pagelayout_container}>
            <PageHeader pageTittle={props.pageTittle} />
            <div className={styles.sidebar_and_main}>
                <PageSidebar data={props.menuItems} />
                {props.children}
            </div>
        </div>
    );
};

export default PageContainer;
