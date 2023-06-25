"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";

import { SideBarContext } from "@/context/layout/SideBarContext";

import Input from "@/components/layout/core/input/Input";

import { MenuItem } from "@/data/shopping/side_menu/ShoppingSideMenuData";

import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import Menu from "./Menu";
import styles from "./PageSidebar.module.css";

type PageSidebarProps = {
    data: MenuItem[];
};

const PageSidebar = (props: PageSidebarProps) => {
    const router = useRouter();
    const { sidebarExpanded, setSidebarExpanded } = useContext(SideBarContext);

    function renderMenu(data: MenuItem[]) {
        return data.map((m, i) => {
            return <Menu menuItem={m} key={i} />;
        });
    }

    return (
        <>
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
                            onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        >
                            {sidebarExpanded ? (
                                <RiMenuFoldLine
                                    size={30}
                                    enableBackground={0}
                                />
                            ) : (
                                <RiMenuUnfoldLine
                                    size={30}
                                    enableBackground={0}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.pagesidebar_items}>
                    <ul className={styles.pagessidebar_list}>
                        {renderMenu(props.data)}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default PageSidebar;
