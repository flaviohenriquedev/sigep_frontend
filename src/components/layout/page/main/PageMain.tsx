"use client";

import { Tab } from "@/@types/shopping/ShoppingTypes";
import styles from "./PageMain.module.css";

import Tabs from "@/components/common/tab/Tabs";
import { useSearchParams } from "next/navigation";

type PageMainProps = {
    tabs?: Tab[];
    children?: React.ReactNode;
};

const PageMain = (props: PageMainProps) => {
    const searchParams = useSearchParams();
    const pn = searchParams.get("pn");

    return (
        <div className={styles.pagemain_container}>
            <div className={styles.pagemain_info}>
                <h3>{pn}</h3>
            </div>
            {props.tabs ? (
                <Tabs tabs={props.tabs} />
            ) : (
                <div className={styles.pagemain_children}>{props.children}</div>
            )}
        </div>
    );
};

export default PageMain;
