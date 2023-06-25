"use client";

import { SideBarContext } from "@/context/layout/SideBarContext";
import {
    MenuItem,
    SubMenuItem,
} from "../../../../types/shopping/ShoppingTypes";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubMenu from "./SubMenu";

import styles from "./Menu.module.css";

type MenuProps = {
    menuItem: MenuItem;
};

export default function Menu(props: MenuProps) {
    const { sidebarExpanded, setSidebarExpanded } = useContext(SideBarContext);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        if (!sidebarExpanded && showMenu) {
            setShowMenu(false);
        }
    }, [sidebarExpanded]);

    function renderSubMenu(data: SubMenuItem[]) {
        return data.map((sub, i) => {
            return (
                <SubMenu description={sub.description} key={i}>
                    {sub.submenu && renderSubMenu(sub.submenu)}
                </SubMenu>
            );
        });
    }

    function handleClick() {
        if (sidebarExpanded) {
            setShowMenu(!showMenu);
        }
    }

    return (
        <li
            className={`${styles.menu_container} ${
                sidebarExpanded
                    ? styles.menu_container_expanded
                    : styles.menu_container_closed
            }`}
        >
            <div onClick={handleClick} className={styles.menu_title_container}>
                <div className={styles.icon_and_description}>
                    <div className={styles.menu_title_icon}>{props.menuItem.icon}</div>
                    <div className={styles.menu_title_description}>
                        {props.menuItem.description}
                    </div>
                </div>
                {sidebarExpanded && props.menuItem.submenu && (
                    <div className={`${styles.arrow} ${!showMenu ? styles.arrow_expanded : styles.arrow_closed}`}>
                        <IoIosArrowDown />
                    </div>
                )}
            </div>

            {props.menuItem.submenu ? (
                <ul
                    className={`${styles.menu_item} ${
                        showMenu
                            ? styles.menu_item_expanded
                            : styles.menu_item_closed
                    }`}
                >
                    {!sidebarExpanded && <label>{props.menuItem.description}</label>}
                    {renderSubMenu(props.menuItem.submenu)}
                </ul>
            ) : null}
        </li>
    );
}
