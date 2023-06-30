"use client";

import { useContext, useEffect, useState } from "react";
import { LuListStart } from "react-icons/lu";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

import { SideBarContext } from "@/context/layout/SideBarContext";

import Input from "@/components/layout/core/input/Input";

import { MenuItem } from "../../../../@types/shopping/ShoppingTypes";

import Menu from "./Menu";
import styles from "./PageSidebar.module.css";
import Tooltip from "@/components/common/tooltip/Tooltip";

type PageSidebarProps = {
    data: MenuItem[];
};

const PageSidebar = (props: PageSidebarProps) => {
    const { sidebarExpanded, setSidebarExpanded, toggleExpandedOrCollapsed } =
        useContext(SideBarContext);

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<MenuItem[]>(props.data);

    function renderMenu(data: MenuItem[]) {
        return data.map((m, i) => {
            return <Menu menuItem={m} key={i} />;
        });
    }

    function toggleSidebarState() {
        setSidebarExpanded(!sidebarExpanded);
        toggleExpandedOrCollapsed(null);
    }

    useEffect(() => {
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

        filterMenu();
    }, [props.data, searchMenu]);

    return (
        <aside
            className={`${styles.pagesidebar_container} ${
                sidebarExpanded
                    ? styles.pagesidebar_container_expanded
                    : styles.pagesidebar_container_closed
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
                        width="auto"
                        value={searchMenu}
                        onChange={setSearchMenu}
                    />
                </div>
                <div
                    className={styles.toggle_sidebar_icon}
                    onClick={toggleSidebarState}
                >
                    {sidebarExpanded ? (
                        <RiMenuFoldLine size={16} enableBackground={0} />
                    ) : (
                        <RiMenuUnfoldLine size={16} enableBackground={0} />
                    )}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: sidebarExpanded ? "flex-end" : "center",
                    gap: "0.5rem",
                    paddingRight: sidebarExpanded ? "1.2rem" : "",
                    height: "1.5rem",
                    marginBottom: "1rem",
                }}
            >
                <Tooltip text="Expandir todos">
                    <button
                        className={`${styles.btn_expand}`}
                        onClick={() => toggleExpandedOrCollapsed(true)}
                    >
                        <LuListStart />
                    </button>
                </Tooltip>

                <Tooltip text="Fechar todos">
                    <button
                        className={styles.btn_collapse}
                        onClick={() => toggleExpandedOrCollapsed(false)}
                    >
                        <LuListStart />
                    </button>
                </Tooltip>
            </div>

            <ul className={styles.pagesidebar_menu_list}>
                {renderMenu(filteredData)}
            </ul>
        </aside>
    );
};

export default PageSidebar;
