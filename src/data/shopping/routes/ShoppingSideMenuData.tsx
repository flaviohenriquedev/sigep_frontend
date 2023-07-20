import { AiOutlineNotification } from 'react-icons/ai';
import { BiPurchaseTag } from 'react-icons/bi';
import { FaFileContract, FaSortAmountUp } from 'react-icons/fa';
import { FaRegHandshake } from 'react-icons/fa';
import { LuNewspaper } from 'react-icons/lu';
import { MdOutlineRequestPage, MdOutlineWarehouse } from 'react-icons/md';

import { MenuItem } from '@/@types/global/GlobalTypes';

const iconSize: number | string = '1.2rem';

export const ShoppingSideMenuData: MenuItem[] = [
    {
        icon: <LuNewspaper size={iconSize} />,
        description: 'Administração',
        pageName: 'Administração',
        href: '',
        submenu: [
            {
                description: '01 - Colare',
                pageName: 'Colare',
                href: ''
            }
        ]
    },
    {
        icon: <BiPurchaseTag size={iconSize} />,
        description: 'Colare Compras',
        pageName: 'Colare Compras',
        href: 'manager/shopping/construct',
        submenu: [
            {
                description: '01 - Integração',
                pageName: 'Integração'
            },
            {
                description: '02 - Cadastro Manual',
                pageName: 'Cadastro Manual'
            }
        ]
    },
    {
        icon: <AiOutlineNotification size={iconSize} />,
        description: 'Envio de Notificação',
        pageName: 'Envio de Notificação',
        submenu: [
            {
                description: '01 - Envio de Notificação entre Usuários',
                pageName: 'Envio de Notificação entre Usuários'
            }
        ]
    },
    {
        icon: <FaSortAmountUp size={iconSize} />,
        description: 'Controle de Saldo',
        pageName: 'Controle de Saldo',
        submenu: [
            {
                description: '01 - Consolidação Saldo Almoxarifado',
                pageName: 'Consolidação Saldo Almoxarifado'
            },
            {
                description: 'O2 - Consolidação Saldo Licitação',
                pageName: 'Consolidação Saldo Licitação'
            },
            {
                description: '03 - Inclusão de Saldo',
                pageName: 'Inclusão de Saldo'
            }
        ]
    },
    {
        icon: <FaFileContract size={iconSize} />,
        description: 'Licitação',
        pageName: 'Licitação',
        submenu: [
            {
                description: '1 - Adesão Registro de Preço',
                pageName: 'Adesão Registro de Preço'
            },
            {
                description: '2 - Dispensa Licitação',
                pageName: 'Dispensa Licitação',
                href: 'manager/shopping/register/dispensation_bidding'
            },
            {
                description: '3 - Licitação',
                pageName: 'Licitação',
                href: 'manager/shopping/register/bidding'
            },

            {
                description: '04 - Decreto Regulamentador',
                pageName: 'Decreto Regulamentador'
            },
            {
                description: '05 - Consolidação Saldo Licitação',
                pageName: 'Consolidação Saldo Licitação'
            }
        ]
    },
    {
        icon: <FaRegHandshake size={iconSize} />,
        description: 'Contrato',
        pageName: 'Contrato',
        submenu: [
            {
                description: '1 - Contrato',
                pageName: 'Contrato'
            },
            {
                description: '2 - Aditivo',
                pageName: 'Aditivo'
            },
            {
                description: '3 - Rescisão',
                pageName: 'Rescisão'
            }
        ]
    },
    {
        icon: <MdOutlineRequestPage size={iconSize} />,
        description: 'Requisição',
        pageName: 'Requisição',
        submenu: [
            {
                description: '01 - Requisição',
                submenu: [
                    {
                        description: '1.01 - Requisição Produto / Serviço',
                        pageName: 'Requisição Produto / Serviço'
                    },
                    {
                        description: '1.02 - Análise Requisição',
                        pageName: 'Análise Requisição'
                    }
                ]
            },
            {
                description: '03 - Solic. Compra / Fornecimento',
                submenu: [
                    {
                        description: '3.01 - Análise de itens por Requisição',
                        pageName: 'Análise de itens por Requisição'
                    },
                    {
                        description: '3.02 - Solicitação de Compra',
                        pageName: 'Solicitação de Compra'
                    },
                    {
                        description: '3.03 - Análise de Compra',
                        pageName: 'Análise de Compra'
                    },
                    {
                        description: '3.04 - Correção Solicitação de Compra',
                        pageName: 'Correção Solicitação de Compra'
                    }
                ]
            },
            {
                description: '04 - Cancelar O.F.',
                pageName: 'Cancelar O.F.'
            },
            {
                description: '05 - Consultar O.F.',
                pageName: 'Consultar O.F.'
            }
        ]
    },
    {
        icon: <MdOutlineWarehouse size={iconSize} />,
        description: 'Almoxarifado',
        pageName: 'Almoxarifado',
        submenu: [
            {
                description: '01 - Consolidação do Almoxarifado',
                pageName: 'Consolidação do Almoxarifado'
            },
            {
                description: '02 - Entrada',
                submenu: [
                    {
                        description:
                            '2.01 - Entrada de Produto / Serviço (OS / OF)',
                        pageName: 'Entrada de Produto  / Serviço (OS / OF)'
                    },
                    {
                        description:
                            '2.02 - Entrada de Produto / Serviço (OS / OF) Parcial',
                        pageName:
                            'Entrada de Produto / Serviço (OS / OF) Parcial'
                    },
                    {
                        description: '2.03 - Entrada de Produtos / Serviços',
                        pageName: 'Entrada de Produtos / Serviços'
                    }
                ]
            },
            {
                description: '03 - Saída',
                submenu: [
                    {
                        description: '3.01 - Expurgo de Produto / Serviço',
                        pageName: 'Expurgo de Produto / Serviço'
                    },
                    {
                        description: '3.02 - Saída de Produto / Serviço',
                        pageName: 'Saída de Produto / Serviço'
                    }
                ]
            },
            {
                description: '04 - Transferência',
                submenu: [
                    {
                        description: '4.01 - Análise de Transferência',
                        pageName: 'Análise de Transferência'
                    },
                    {
                        description: '4.02 - Transferência',
                        pageName: 'Transferência'
                    }
                ]
            },
            {
                description: '05 - Requisição de Almoxarifado',
                submenu: [
                    {
                        description: '5.01 - Requisição Almoxarifado',
                        pageName: 'Requisição Almoxarifado'
                    },
                    {
                        description:
                            '5.02 - Análise de Requisição Almoxarifado',
                        pageName: 'Análise de Requisição Almoxarifado'
                    }
                ]
            }
        ]
    }
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Relatório",
    //     pageName: "Relatório",
    //     href: "manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Configurações",
    //     pageName: "Configurações",
    //     href: "manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Entidades",
    //     pageName: "Entidades",
    //     href: "manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Fornecedor",
    //     pageName: "Fornecedor",
    //     href: "manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Documentos",
    //     pageName: "Documentos",
    //     href: "manager/shopping/order_supply",
    // },
    // {
    //     icon: <BiPurchaseTag size={iconSize} />,
    //     description: "Usuário",
    //     pageName: "Usuário",
    //     href: "manager/shopping/order_supply",
    // },
];
