"use client";

import styles from "./PageContainer.module.css";

import PageHeader from "../page_header/PageHeader";
import PageSidebar from "../sidebar/PageSidebar";

type PageContainerProps = {
    children: any;
    menuItems: any[];
    pageTittle: string;
    module?: string;
};

const PageContainer = (props: PageContainerProps) => {
    return (
        <div id="page_container"
            className={styles.pagelayout_container}>

            <PageHeader pageTittle={props.pageTittle} module={props.module}/>
            
            <div className={styles.sidebar_and_main}>
                <PageSidebar data={props.menuItems} />
                {props.children}
            </div>
        </div>
    );
};

export default PageContainer;
