'use client'

import styles from "./PageMain.module.css";

import {useContext} from 'react';
import {useSearchParams} from 'next/navigation';

import {SideBarContext} from "@/context/layout/SideBarContext";

type PageMainProps = {
    children: any;
};

const PageMain = (props: PageMainProps) => {

    const searchParams  = useSearchParams();
    const pn = searchParams.get('pn');

    const { sidebarExpanded } = useContext(SideBarContext)

    return (
        <div className={`${styles.pagemain_container}
                ${sidebarExpanded ? styles.pagemain_container_expanded : ''}
            `}>
            <div className={styles.pagemain_info}>
                <h3>{pn}</h3>
            </div>
            <div className={styles.pagemain_children}>
                {props.children}
            </div>
        </div>
    );
};

export default PageMain;
