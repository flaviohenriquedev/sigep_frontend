'use client';
import { ThemeProvider } from 'next-themes';

import { SideBarContextProvider } from '@/context/layout/SideBarContext';

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <SideBarContextProvider>{children}</SideBarContextProvider>
        </ThemeProvider>
    );
};

export default Provider;
