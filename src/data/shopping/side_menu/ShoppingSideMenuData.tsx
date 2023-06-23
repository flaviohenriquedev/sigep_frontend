import { LuNewspaper } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";

export type MenuItem = {
    icon: JSX.Element;
    description: string;
    pageName: string;
    href?: string;
    submenu?: SubMenuItem[];
};

export type SubMenuItem = {
    description: string;
    href?: string;
    submenu?: SubMenuItem[];
}

export const ShoppingSideMenuData: MenuItem[] = [
    {
        icon: <LuNewspaper size={20} />,
        description: "Administração",
        pageName: "Administração",
        href: "",
        submenu: [
            {
                description: "01 - Colare",
                href: "",
                submenu: [{
                    description: 'teste',
                    href: 'manager/shopping/bidding',
                }]
            },
        ],
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Colare Compras",
        pageName: "Colare Compras",
        href: "manager/shopping/construct",
        submenu: [
            {
                description: "Colare 2"
            }
        ]
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Envio de Notificação",
        pageName: "Envio de Notificação",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Controle de Saldo",
        pageName: "Controle de Saldo",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Licitação / Contratos",
        pageName: "Licitação / Contratos",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Requisição",
        pageName: "Requisição",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Almoxarifado",
        pageName: "Almoxarifado",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Relatório",
        pageName: "Relatório",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Configurações",
        pageName: "Configurações",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Entidades",
        pageName: "Entidades",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Fornecedor",
        pageName: "Fornecedor",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Documentos",
        pageName: "Documentos",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={20} />,
        description: "Usuário",
        pageName: "Usuário",
        href: "manager/shopping/order_supply",
    },
];
