"use client";

import styles from "./PageSidebar.module.css";

import {useContext} from "react";
import {SideBarContext} from "@/context/layout/SideBarContext";

import {RiMenuFoldLine, RiMenuUnfoldLine} from 'react-icons/ri'
import {LuNewspaper} from 'react-icons/lu';
import Input from "@/components/layout/core/input/Input";

const PageSidebar = () => {
    const { sidebarExpanded, toggleSidebar } = useContext(SideBarContext);

    const items = [
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'Licitação'},
        {code: 1, icon: <LuNewspaper size={25}/>,  description: 'FIM DA PÁGINA'},
    ]

    function renderMenu() {
        return items.map((menu) => {
            return (
                <div key={menu.code}
                     className={styles.item}>
                    <div className={styles.icon}>
                        {menu.icon}
                    </div>
                    {sidebarExpanded &&
                        <div className={styles.description}>
                            <label>{menu.description}</label>
                        </div>
                    }
                </div>
            )
        })
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
