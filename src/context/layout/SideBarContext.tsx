'use client';

import { createContext, useState  } from "react";

type SideBarContextProps = {
    sidebarExpanded: boolean;
    setSidebarExpanded: (value: boolean) => void;
}

export const SideBarContext = createContext<SideBarContextProps>({
    sidebarExpanded: true,
    setSidebarExpanded: () => {},
})

export const SideBarContextProvider = ({children} : {children: React.ReactNode}) => {

    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    return (
        <SideBarContext.Provider value={{
            sidebarExpanded,
            setSidebarExpanded,
        }}>
            {children}
        </SideBarContext.Provider>
    )
}