'use client'

import {useRouter} from 'next/navigation';
import styles from './MenuItem.module.css';

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
            onClick={() => route.push(`${props.href}?ph=${props.title}`)}
        >
            <div id="menu_item_icon_and_text" className={styles.icon_and_text}>
                <div id="menu_item_icon" className={styles.icon}>
                    {props.children}
                </div>
                <div id="menu_item_text" className={styles.text}>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    );
}
