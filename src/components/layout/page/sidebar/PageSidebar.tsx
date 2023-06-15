"use client";

import styles from "./PageSidebar.module.css";

import { useContext } from "react";
import { SideBarContext } from "@/context/layout/SideBarContext";

const PageSidebar = () => {
    const { sidebarExpanded, toggleSidebar } = useContext(SideBarContext);

    return (
        <aside
            className={`${styles.pagesidebar_container} ${
                sidebarExpanded ? styles.pagesidebar_container_expanded : ""
            }`}
        >
            <div className={styles.toggle_sidebar}>
                <button onClick={toggleSidebar}>SIDEBAR</button>
            </div>
        </aside>
    );
};

export default PageSidebar;
