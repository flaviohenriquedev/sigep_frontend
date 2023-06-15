

import styles from './Menu.module.css'
import {
    IconCalendarDollar,
} from "@tabler/icons-react";
import MenuItem from "@/components/layout/menu/MenuItem";

export default function Menu() {

    const modules = [
        {
            title: 'Compras',
            icon: <IconCalendarDollar size={60} stroke={1}/>,
            href: "/manager/shopping"
        }
    ]

    function renderModules() {
        return modules.map((module, index) => {
            return (
                <MenuItem key={index}
                          title={module.title}
                          href={module.href}>
                    {module.icon}
                </MenuItem>
            )
        })
    }

    return (
        <div className={styles.menu}>
            {renderModules()}
        </div>
    )
}