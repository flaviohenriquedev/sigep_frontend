"use client";

import styles from "./PageMain.module.css";

import { useSearchParams } from "next/navigation";

type PageMainProps = {
    children: any;
};

const PageMain = (props: PageMainProps) => {
    const searchParams = useSearchParams();
    const pn = searchParams.get("pn");

    return (
        <div className={styles.pagemain_container}>
            <div className={styles.pagemain_info}>
                <h3>{pn}</h3>
            </div>
            <div className={styles.pagemain_children}>{props.children}</div>
        </div>
    );
};

export default PageMain;
