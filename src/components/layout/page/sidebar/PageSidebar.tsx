"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { SideBarContext } from "@/context/layout/SideBarContext";

import Input from "@/components/layout/core/input/Input";

import { MenuItem } from "../../../../@types/shopping/ShoppingTypes";

import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import Menu from "./Menu";
import styles from "./PageSidebar.module.css";

type PageSidebarProps = {
    data: MenuItem[];
};

const PageSidebar = (props: PageSidebarProps) => {
    const router = useRouter();
    const { sidebarExpanded, setSidebarExpanded } = useContext(SideBarContext);
    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<MenuItem[]>(props.data);

    function renderMenu(data: MenuItem[]) {
        return data.map((m, i) => {
            return <Menu menuItem={m} key={i} />;
        });
    }

    const filterMenu = () => {
        const filteredMap: { [key: string]: MenuItem } = {};

        if (props.data) {
            props.data.forEach((d) => {
                const filteredMenu: MenuItem = { ...d };
                if (
                    d.description
                        .toLowerCase()
                        .includes(searchMenu.toLowerCase()) ||
                    (d.submenu &&
                        d.submenu.some((sub) =>
                            sub.description
                                .toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        ))
                ) {
                    filteredMap[d.description] = filteredMenu;
                }

                if (d.submenu) {
                    const filteredSubmenu = d.submenu.filter((sub) =>
                        sub.description
                            .toLowerCase()
                            .includes(searchMenu.toLowerCase())
                    );
                    if (filteredSubmenu.length > 0) {
                        filteredMenu.submenu = filteredSubmenu;
                        filteredMap[d.description] = filteredMenu;
                    }
                }
            });
        }

        const filtered: MenuItem[] = Object.values(filteredMap);
        setFilteredData(filtered);
    };

    useEffect(() => {
        filterMenu();
    }, [searchMenu]);

    return (
        <aside
            className={`${sidebarExpanded ? styles.pagesidebar_container_expanded : styles.pagesidebar_container_close
            }`}
        >
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
                        width="20rem"
                        value={searchMenu}
                        onChange={setSearchMenu}
                    />
                </div>
                <div className={styles.toggle_sidebar_icon_container}>
                    <div
                        className={styles.toggle_sidebar_icon}
                        onClick={() => setSidebarExpanded(!sidebarExpanded)}
                    >
                        {sidebarExpanded ? (
                            <RiMenuFoldLine size={20} enableBackground={0} />
                        ) : (
                            <RiMenuUnfoldLine size={20} enableBackground={0} />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.pagesidebar_items}>
                <ul className={styles.pagesidebar_items_list}>
                    {renderMenu(filteredData)}
                </ul>
            </div>
        </aside>
    );
};

export default PageSidebar;
