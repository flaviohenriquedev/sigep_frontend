"use client";

import styles from "./PageSidebar.module.css";

import {useContext} from "react";
import {useRouter} from 'next/navigation';
import {SideBarContext} from "@/context/layout/SideBarContext";

import {RiMenuFoldLine, RiMenuUnfoldLine} from 'react-icons/ri'
import Input from "@/components/layout/core/input/Input";

type PageSidebarProps = {
    items: any[];
}

const PageSidebar = (props: PageSidebarProps) => {

    const router = useRouter();
    const {sidebarExpanded, toggleSidebar} = useContext(SideBarContext);

    function renderMenu() {
        if (props.items) {
            return props.items.map((menu) => {
                return (
                    <div key={menu.code}
                         className={styles.item}
                         onClick={() => router.replace(`${menu.href}?pn=${menu.pageName}`)}>
                        <div className={styles.description}>
                            {menu.icon}
                            <p className={`${sidebarExpanded ? styles.item_p  : styles.item_p_hidden}`}>{menu.description}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <aside
            className={`${styles.pagesidebar_container} ${
                sidebarExpanded ? styles.pagesidebar_container_expanded : ""
            }`}
        >
            <div className={styles.pagesidebar_top}>
                <div className={styles.toggle_sidebar}>
                    <div className={`${sidebarExpanded ? styles.pagesidebar_search_menu :
                        styles.pagesidebar_search_menu_hidden}`}>
                        <Input className="text" placeholder="Buscar Menu"/>
                    </div>
                    <div className={styles.toggle_sidebar_icon}
                         onClick={toggleSidebar}>
                        {sidebarExpanded ? <RiMenuFoldLine size={30} enableBackground={0}/>
                            : <RiMenuUnfoldLine size={30} enableBackground={0}/>}
                    </div>
                </div>
            </div>
            <div className={styles.pagesidebar_items}>
                {renderMenu()}
            </div>
        </aside>
    );
};

export default PageSidebar;
