import ModuleCardItem from "@/components/layout/module/ModuleCardItem";
import { IconCalendarDollar, IconCar } from "@tabler/icons-react";
import styles from './ModuleCard.module.css';

export default function Menu() {

    const modules = [
        {
            title: 'Compras',
            icon: <IconCalendarDollar size={60} stroke={1}/>,
            href: "/manager/shopping"
        },
        {
            title: 'Frotas',
            icon: <IconCar size={60} stroke={1}/>,
            href: "/manager/fleet"
        },
    ]

    function renderModules() {

        return modules.map((module, index) => {
            return (
                    <ModuleCardItem key={index}
                              title={module.title}
                              href={module.href}>
                        {module.icon}
                    </ModuleCardItem>
            )
        })
    }

    return (
        <div className={styles.menu}>
            {renderModules()}
        </div>
    )
}