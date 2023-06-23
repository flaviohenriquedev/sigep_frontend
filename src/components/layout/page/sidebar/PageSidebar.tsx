"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import { SideBarContext } from "@/context/layout/SideBarContext";

import Input from "@/components/layout/core/input/Input";

import {
    MenuItem,
    SubMenuItem,
} from "@/data/shopping/side_menu/ShoppingSideMenuData";

import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import styles from "./PageSidebar.module.css";

type PageSidebarProps = {
    data: MenuItem[];
};

const PageSidebar = (props: PageSidebarProps) => {
    const router = useRouter();
    const { sidebarExpanded, toggleSidebar } = useContext(SideBarContext);

    function renderMenus(menus: MenuItem[]) {
        return menus.map((menu, index) => {
            return (
                <li key={index}>
                    <div style={{display: 'flex'}}>
                        {menu.icon}
                        {menu.description}
                    </div>
                    {menu.submenu && renderSubMenus(menu.submenu)}
                </li>
            );
        });
    }

    function renderSubMenus(subs: SubMenuItem[]) {
        return (
            <ul>
                {subs.map((sub, index) => {
                    return (
                        <li key={index} style={{marginLeft: '2rem'}}>
                            {sub.description}
                            {sub.submenu && renderSubMenus(sub.submenu)}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <aside
            className={`${styles.pagesidebar_container} ${
                sidebarExpanded ? styles.pagesidebar_container_expanded : ""
            }`}
        >
            <div id="pagesidebar_top" className={styles.pagesidebar_top}>
                <div className={styles.toggle_sidebar}>
                    <div
                        className={`${
                            sidebarExpanded
                                ? styles.pagesidebar_search_menu
                                : styles.pagesidebar_search_menu_hidden
                        }`}
                    >
                        <Input
                            className="text"
                            type="text"
                            placeholder="Buscar Menu"
                        />
                    </div>
                    <div
                        className={styles.toggle_sidebar_icon}
                        onClick={toggleSidebar}
                    >
                        {sidebarExpanded ? (
                            <RiMenuFoldLine size={30} enableBackground={0} />
                        ) : (
                            <RiMenuUnfoldLine size={30} enableBackground={0} />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.pagesidebar_items}>
                {props.data && <ul>{renderMenus(props.data)}</ul>}
            </div>
        </aside>
    );
};

export default PageSidebar;
