'use client';

import { createContext, useState } from 'react';

type SideBarContextProps = {
    sidebarExpanded: boolean;
    setSidebarExpanded: (value: boolean) => void;
    expandedOrCollapsed: boolean | null;
    toggleExpandedOrCollapsed: (value: boolean | null) => void;
};

export const SideBarContext = createContext<SideBarContextProps>({
    sidebarExpanded: true,
    setSidebarExpanded: () => {},
    expandedOrCollapsed: null,
    toggleExpandedOrCollapsed: () => {}
});

export const SideBarContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [expandedOrCollapsed, setExpandedOrCollapsed] = useState<
        boolean | null
    >(null);

    function toggleExpandedOrCollapsed(value: boolean | null) {
        setExpandedOrCollapsed(value);
    }

    return (
        <SideBarContext.Provider
            value={{
                sidebarExpanded,
                setSidebarExpanded,
                expandedOrCollapsed,
                toggleExpandedOrCollapsed
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};
