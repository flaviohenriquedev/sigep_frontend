'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default async function Page() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (!theme) {
            setTheme('default');
        }
    }, [theme, setTheme]);

    return (
        <div style={{ marginTop: '10rem' }}>
            <button
                className={'bg-primary'}
                onClick={() => setTheme('default')}
            >
                Default
            </button>
            <button className={'bg-primary'} onClick={() => setTheme('dark')}>
                Dark
            </button>

            <div className={'h-10 w-20 bg-background'}></div>
        </div>
    );
}
