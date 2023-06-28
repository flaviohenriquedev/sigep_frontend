'use client'

import {useRouter} from 'next/navigation';
import styles from './ModuleCardItem.module.css';

type MenuItemProps = {
    title: string;
    children: any;
    href: string;
};

export default function MenuItem(props: MenuItemProps) {

    const route = useRouter();

    return (
        <div
            id="menu_item_container"
            className={styles.container}
            onClick={() => route.push(props.href)}
        >
            <div id="menu_item_icon_and_text" className={styles.icon_and_text}>
                <div id="menu_item_icon" className={styles.icon}>
                    {props.children}
                </div>
                <div id="menu_item_text" className={styles.text}>
                    <h5>{props.title}</h5>
                </div>
            </div>
        </div>
    );
}
