'use client'

import styles from "./PageMain.module.css";

import { useContext } from 'react';
import { SideBarContext } from "@/context/layout/SideBarContext";

type PageMainProps = {
    children: any;
};

const PageMain = (props: PageMainProps) => {

    const { sidebarExpanded } = useContext(SideBarContext)

    return (
        <div className={`${styles.pagemain_container}
                ${sidebarExpanded ? styles.pagemain_container_expanded : ''}
            `}>
            <div className={styles.page_info}>Page Info</div>
            <div>{props.children}</div>
        </div>
    );
};

export default PageMain;
