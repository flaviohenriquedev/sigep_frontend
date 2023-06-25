import { AiOutlineNotification } from 'react-icons/ai';
import { BiPurchaseTag } from "react-icons/bi";
import { FaFileContract, FaSortAmountUp } from 'react-icons/fa';
import { LuNewspaper } from "react-icons/lu";

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

const iconSize: number | string = '1.3rem';

export const ShoppingSideMenuData: MenuItem[] = [
    {
        icon: <LuNewspaper size={iconSize}/>,
        description: "Administração",
        pageName: "Administração",
        href: "",
        submenu: [
            {
                description: "01 - Colare",
                href: "",
            },
        ],
    },
    {
        icon: <BiPurchaseTag size={iconSize}/>,
        description: "Colare Compras",
        pageName: "Colare Compras",
        href: "manager/shopping/construct",
        submenu: [
            {
                description: "01 - Integração"
            },
            {
                description: "02 - Cadastro Manual"
            }
        ]
    },
    {
        icon: <AiOutlineNotification size={iconSize} />,
        description: "Envio de Notificação",
        pageName: "Envio de Notificação",
        submenu: [
            {
                description: "01 - Envio de Notificação entre Usuários"
            }
        ]
    },
    {
        icon: <FaSortAmountUp size={iconSize} />,
        description: "Controle de Saldo",
        pageName: "Controle de Saldo",
        submenu: [
            {
                description: "01 - Consolidação Saldo Almoxarifado"
            },
            {
                description: "O2 - Consolidação Saldo Licitação"
            }, 
            {
                description: "03 - Inclusão de Saldo"
            }
        ]
    },
    {
        icon: <FaFileContract size={iconSize} />,
        description: "Licitação / Contratos",
        pageName: "Licitação / Contratos",
        submenu: [
            {
                description: "01 - Licitação",
                submenu: [
                    {
                        description: "1.01 - Adesão Registro de Preço"
                    },
                    {
                        description: "1.02 - Dispensa Licitação"
                    },
                    {
                        description: "1.03 - Licitação"
                    }
                ]
            },
            {
                description: "02 - Contrato",
                submenu: [
                    {
                        description: "2.01 - Contrato"
                    },
                    {
                        description: "2.02 - Aditivo"
                    },
                    {
                        description: "2.03 - Rescisão"
                    }
                ]
            },
            {
                description: "03 - Decreto Regulamentador"
            },
            {
                description: "04 - Consolidação Saldo Licitação"
            }
        ]
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Requisição",
        pageName: "Requisição",
        submenu: [
            {
                description: "01 - Requisição",
                submenu: [
                    {
                        description: "1.01 - Requisição Produto / Serviço"
                    },
                    {
                        description: "1.02 - Análise Requisição"
                    }
                ]
            },
            {
                description: "03 - Solic. Compra / Fornecimento",
                submenu: [
                    {
                        description: "3.01 - Análise de itens por Requisição"                        
                    },
                    {
                        description: "3.02 - Solicitação de Compra"
                    },
                    {
                        description: "3.03 - Análise de Compra"
                    },
                    {
                        description: "3.04 - Correção Solicitação de Compra"
                    }
                ]
            },
            {
                description: "04 - Cancelar O.F."
            },
            {
                description: "05 - Consultar O.F."
            }
        ]
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Almoxarifado",
        pageName: "Almoxarifado",
        submenu: [
            {
                description: "01 - Consolidação do Almoxarifado",
            },
            {
                description: "02 - Entrada",
                submenu: [
                    {
                        description: "2.01 - Entrada de Produtos / Serviços (OS / OF)"
                    },
                    {
                        description: "2.02 - Entrada de Produtos / Serviços (OS / OF) Parcial"
                    },
                    {
                        description: "2.03 - Entrada de Produtos / Serviços"
                    }
                ]
            },
            {
                description: "03 - Saída",
                submenu: [
                    {
                        description: "3.01 - Expurgo de Produto / Serviço"
                    },
                    {
                        description: "3.02 - Saída de Produto / Serviço"
                    }
                ]
            },
            {
                description: "04 - Transferência",
                submenu: [
                    {
                        description: "4.01 - Análise de Transferência"
                    },
                    {
                        description: "4.02 - Transferência"
                    }
                ]
            },
            {
                description: "05 - Requisição de Almoxarifado",
                submenu: [
                    {
                        description: "5.01 - Requisição Almoxarifado"
                    },
                    {
                        description: "5.02 - Análise de Requisição Almoxarifado"
                    }
                ]
            }
        ],
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Relatório",
        pageName: "Relatório",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Configurações",
        pageName: "Configurações",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Entidades",
        pageName: "Entidades",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Fornecedor",
        pageName: "Fornecedor",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Documentos",
        pageName: "Documentos",
        href: "manager/shopping/order_supply",
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: "Usuário",
        pageName: "Usuário",
        href: "manager/shopping/order_supply",
    },
    {
        icon: < BiPurchaseTag size={iconSize}/>,
        description: "Teste",
        pageName: "Teste",
    }
];
