'use client';

import { createContext, useState  } from "react";

type SideBarContextProps = {
    sidebarExpanded: boolean;
    toggleSidebar: () => void;
}

export const SideBarContext = createContext<SideBarContextProps>({
    sidebarExpanded: true,
    toggleSidebar: () => {}
})

export const SideBarContextProvider = ({children}) => {

    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    return (
        <SideBarContext.Provider value={{
            sidebarExpanded,
            toggleSidebar
        }}>
            {children}
        </SideBarContext.Provider>
    )
}