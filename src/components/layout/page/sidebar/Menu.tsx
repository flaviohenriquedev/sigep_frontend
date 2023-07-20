"use client";

import { SideBarContext } from "@/context/layout/SideBarContext";
import { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import SubMenu from "./SubMenu";

import styles from "./Menu.module.css";
import { MenuItem, SubMenuItem } from "@/@types/global/GlobalTypes";

type MenuProps = {
    menuItem: MenuItem;
};

export default function Menu(props: MenuProps) {
    const { sidebarExpanded, expandedOrCollapsed, toggleExpandedOrCollapsed } =
        useContext(SideBarContext);
    const [showMenu, setShowMenu] = useState<boolean | null>(false);
    const [menuSelected, setMenuSelected] = useState(false);

    function renderSubMenu(data: SubMenuItem[]) {
        return data.map((sub, i) => {
            return (
                <SubMenu data={sub} key={i}>
                    {sub.submenu && renderSubMenu(sub.submenu)}
                </SubMenu>
            );
        });
    }

    useEffect(() => {
        if (expandedOrCollapsed !== null) {
            setShowMenu(expandedOrCollapsed);
        }
    }, [expandedOrCollapsed]);

    useEffect(() => {
        if (!sidebarExpanded && showMenu) {
            setShowMenu(false);
        }
    }, [sidebarExpanded, showMenu]);

    function handleClickMenu() {
        if (sidebarExpanded) {
            setMenuSelected(!menuSelected);
            setShowMenu(!showMenu);
            toggleExpandedOrCollapsed(null);
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
            <div
                onClick={handleClickMenu}
                className={`${
                    showMenu && styles.menu_title_container_selected
                } ${styles.menu_title_container}`}
            >
                <div className={styles.icon_and_description}>
                    <div className={styles.menu_title_icon}>
                        {props.menuItem.icon}
                    </div>
                    <div className={styles.menu_title_description}>
                        {props.menuItem.description}
                    </div>
                </div>
                {sidebarExpanded && props.menuItem.submenu && (
                    <div
                        className={`${styles.arrow} ${
                            !showMenu
                                ? styles.arrow_expanded
                                : styles.arrow_closed
                        }`}
                    >
                        <MdOutlineKeyboardArrowRight size={20} />
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
                    {!sidebarExpanded && (
                        <div className={styles.menu_item_closed_title}>
                            {props.menuItem.description}
                        </div>
                    )}
                    {renderSubMenu(props.menuItem.submenu)}
                </ul>
            ) : null}
        </li>
    );
}
