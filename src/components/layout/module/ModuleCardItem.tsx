"use client";

import { useRouter } from "next/navigation";
import styles from "./ModuleCardItem.module.css";

type MenuItemProps = {
    title: string;
    children: JSX.Element;
    href?: string;
    info?: string;
};

export default function MenuItem(props: MenuItemProps) {
    const route = useRouter();

    function handleClick() {
        props.href && route.push(props.href);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.icon}>{props.children}</div>

                <div className={styles.text_area} onClick={handleClick}>
                    <div className={styles.title}>
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
