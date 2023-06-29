"use client";

import { useRouter } from "next/navigation";
import styles from "./ModuleCardItem.module.css";

type MenuItemProps = {
    title: string;
    children: JSX.Element;
    href: string;
    info?: string;
};

export default function MenuItem(props: MenuItemProps) {
    const route = useRouter();

    return (
        <>
            <div className={styles.container}>
                {props.children}

                <div
                    className={styles.text_area}
                    onClick={() => route.push(props.href)}
                >
                    <div className={styles.title}>
                        <h1>{props.title}</h1>
                    </div>
                    <hr />
                    <div className={styles.info}>
                        <p>{props.info}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
