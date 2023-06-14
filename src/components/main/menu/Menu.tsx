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
            title: 'Previdência',
            icon: '',
            href: '/'
        },
        {
            title: 'Controle Interno',
            icon: '',
            href: '/'
        },
        {
            title: 'Compras',
            icon: <IconCalendarDollar size={60} stroke={1}/>,
            href: "/manager/shopping"
        },
        {
            title: 'Frotas',
            icon: <IconCar size={60} stroke={1}/>,
            href: '/manager/fleet'
        },
        {
            title: 'Patrimônio',
            icon: '',
            href: '/'
        },
        {
            title: 'Portal do Cidadão',
            icon: '',
            href: '/'
        },
        {
            title: 'Gestão Educacional',
            icon: '',
            href: '/'
        },
        {
            title: 'Portal Social',
            icon: '',
            href: '/'
        },
        {
            title: 'Web Hospitalar',
            icon: '',
            href: '/'
        },
        {
            title: 'Cemitério',
            icon: <IconGrave size={60} stroke={1}/>,
            href: '/manager/cemetery'
        },
        {
            title: 'Gestão de Trânsito',
            icon: '',
            href: '/'
        },
        {
            title: 'Ouvidoria',
            icon: '',
            href: '/'
        },
        {
            title: 'Contas a Pagar',
            icon: '',
            href: '/'
        },
        {
            title: 'Pregão',
            icon: '',
            href: '/'
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