'use client'

import {
    MenuItem,
    SubMenuItem,
} from "@/data/shopping/side_menu/ShoppingSideMenuData";
import Item from "./Item";
import { CSSProperties, useState } from "react";
import styles from './Menu.module.css'

export default function Menu(props: MenuItem) {

    const [show, setShow] = useState<boolean>(false)

    const style: CSSProperties = {
        display: `${show ? 'block' : 'none'}`
    }

    function renderSubMenu(data: SubMenuItem[]) {
        return data.map((sub) => {
            return (
                <Item description={sub.description}>
                    {sub.submenu && renderSubMenu(sub.submenu)}
                </Item>
            );
        });
    }

    return (
        <li>
            <div style={{ display: "flex" }}
                 onClick={() => setShow(!show)}
                 className={styles.menu}>
                <div>{props.icon}</div>
                <div>{props.description}</div>
            </div>

            {props.submenu ? (
                <ul style={style}>
                    {renderSubMenu(props.submenu)}
                </ul>
            ): null}
        </li>
    );
}
