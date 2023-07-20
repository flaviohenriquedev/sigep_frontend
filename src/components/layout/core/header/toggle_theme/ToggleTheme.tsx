'use client';

import { useTheme } from 'next-themes';

import { ThemeConfig } from '@/data/global/GlobalConfigs';

const ToggleTheme = () => {
    const { setTheme } = useTheme();

    function renderOptions() {
        return ThemeConfig.map((config) => {
            return (
                <option value={config.theme} key={config.theme}>
                    {config.title}
                </option>
            );
        });
    }

    return (
        <div className="flex">
            <select onChange={(e) => setTheme(e.target.value)}>
                {renderOptions()}
            </select>
        </div>
    );
};

export default ToggleTheme;
