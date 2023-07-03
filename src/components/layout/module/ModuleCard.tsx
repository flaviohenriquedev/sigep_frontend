import ModuleCardItem from "@/components/layout/module/ModuleCardItem";
import { BiPurchaseTag } from "react-icons/bi";
import { BsFileEarmarkPerson, BsCarFront } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbFileInvoice } from "react-icons/tb";
import styles from "./ModuleCard.module.css";

export default function Menu() {
    const iconSize: string | number = "70px";

    const modules = [
        {
            title: "COMPRAS",
            icon: <BiPurchaseTag size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
            href: "/manager/shopping",
        },
        {
            title: "FROTAS",
            icon: <BsCarFront size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
            href: "manager/fleet",
        },
        {
            title: "RECURSOS HUMANOS",
            icon: <BsFileEarmarkPerson size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
        },
        {
            title: "GESTÃO TRIBUTÁRIA",
            icon: <RiMoneyDollarCircleLine size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
        },
        {
            title: "PROTOCOLO",
            icon: <HiOutlineClipboardDocumentList size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
        },
        {
            title: "GESTÃO DE ISS",
            icon: <TbFileInvoice size={iconSize} />,
            info: "Aqui vão informações referentes a esse módulo, ou talvez os favoritos",
        },
    ];

    function renderModules() {
        return modules.map((module, index) => {
            return (
                <ModuleCardItem
                    key={index}
                    title={module.title}
                    href={module.href}
                    info={module.info}
                >
                    {module.icon}
                </ModuleCardItem>
            );
        });
    }

    return <div className={styles.menu}>{renderModules()}</div>;
}
