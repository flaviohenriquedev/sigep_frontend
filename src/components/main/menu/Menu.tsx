import MenuItem from "@/components/main/menu/MenuItem";

import styles from './Menu.module.css'
import {
    IconCalendarDollar,
    IconArchive,
    IconId,
    IconCoins,
    IconAbacus,
    IconHomeDollar,
    IconReceipt2,
    IconCar,
    IconGrave
} from "@tabler/icons-react";

export default function Menu() {

    const modules = [
        {
            title: 'Compras',
            icon: <IconCalendarDollar size={60} stroke={1}/>,
            href: "/manager/shopping"
        },
        {
            title: 'Gestão Contábil',
            icon: <IconAbacus size={60} stroke={1}/>,
            href: '/manager/accountant'
        },
        {
            title: 'Tesouraria',
            icon: <IconHomeDollar size={60} stroke={1}/>,
            href: '/'
        },
        {
            title: 'Gestão Tributária',
            icon: <IconCoins size={60} stroke={1}/>,
            href: '/'
        },
        {
            title: 'Gestão de ISS',
            icon: <IconReceipt2 size={60} stroke={1}/>,
            href: '/'
        },
        {
            title: 'Protocolo',
            icon: <IconArchive size={60} stroke={1}/>,
            href: '/'
        },
        {
            title: 'Gestão de RH',
            icon: <IconId size={60} stroke={1}/>,
            href: '/'
        },
        {
            title: 'Frotas',
            icon: <IconCar size={60} stroke={1}/>,
            href: '/manager/fleet'
        },
        {
            title: 'Cemitério',
            icon: <IconGrave size={60} stroke={1}/>,
            href: '/manager/cemetery'
        },
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