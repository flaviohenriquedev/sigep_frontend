import { AiOutlineNotification } from "react-icons/ai";
import { BsHouses } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineMoveDown, MdOutlineWarehouse } from "react-icons/md";
import { FaFileContract, FaRegHandshake, FaSortAmountUp } from "react-icons/fa";
import { CgInsertAfterO } from "react-icons/cg";
import { MenuItem } from "../../../@types/shopping/ShoppingTypes";

const iconSize: number | string = "1.2rem";

export const FleetPageRoutes: MenuItem[] = [
    {
        icon: <FiHelpCircle size={iconSize} />,
        description: "Ajuda",
        pageName: "Ajuda",
        href: "",
    },
    {
        icon: <AiOutlineNotification size={iconSize} />,
        description: "Envio Notificação",
        pageName: "Envio Notificação",
        submenu: [
            {
                description: "01 - Envio Notificação entre Usuários",
                pageName: "Envio Notificação entre Usuários",
                href: "manager/fleet/register/send_notification",
            },
        ],
    },
    {
        icon: <BsHouses size={iconSize} />,
        description: "Entidades",
        pageName: "Entidades",
        submenu: [
            {
                description: "01 - Acessoria",
                pageName: "Acessoria",
                href: "manager/fleet/register/advisory_company",
            },
            {
                description: "02 - Gestor",
                pageName: "Gestor",
                href: "manager/fleet/register/manager_company",
            },
            {
                description: "03 - Instituição",
                pageName: "Instituição",
                href: 'manager/fleet/register/institution'
            },
            {
                description: "04 - Unidade Orçamentária",
                pageName: "Unidade Orçamentária",
                href: 'manager/fleet/register/institution_unit'
            },
            {
                description: "05 - Departamento",
                pageName: "Departamento",
            },
        ],
    },
    {
        icon: <CgInsertAfterO size={iconSize} />,
        description: "Cadastro",
        pageName: "Cadastro",
        submenu: [
            {
                description: "01 - Veículo",
                pageName: "Veículo",
            },
            {
                description: "O2 - Cotação Combustível",
                pageName: "Cotação Combustível",
            },
            {
                description: "03 - Distância entre cidades",
                pageName: "Distância entre cidades",
            },
            {
                description: "04 - Fornecedor",
                pageName: "Fornecedor",
            },
            {
                description: "05 - Motorista",
                pageName: "Motorista",
            },
            {
                description: "06 - Multa",
                pageName: "Multa",
            },
            {
                description: "07 - Produto / Serviço",
                pageName: "Produto / Serviço",
            },
            {
                description: "08 - Cursos",
                pageName: "Cursos",
            },
            {
                description: "09 - Roteiro Ordem de Tráfego",
                pageName: "Roteiro Ordem de Tráfego",
            },
            {
                description: "10 - Corretor",
                pageName: "Corretor",
            },
        ],
    },
    {
        icon: <MdOutlineMoveDown size={iconSize} />,
        description: "Movimentação",
        pageName: "Movimentação",
        submenu: [
            {
                description: "01 - Análise Solicitação Requisições",
                pageName: "Análise Solicitação Requisições",
            },
            {
                description: "02 - Análise Solicitação Veículo",
                pageName: "Análise Solicitação Veículo",
            },
            {
                description: "03 - Movimentação Veículo",
                pageName: "Movimentação Veículo",
            },
            {
                description: "04 - Ordem de Serviço",
                pageName: "Ordem de Serviço",
            },
            {
                description: "05 - Ordem de Tráfego",
                pageName: "Ordem de Tráfego",
            },
            {
                description: "06 - Requisição Produto / Serviço",
                pageName: "Requisição Produto / Serviço",
            },
            {
                description: "07 - Solicitação Veículo",
                pageName: "Solicitação Veículo",
            },
            {
                description: "08 - Importação Movimentação Veículo (E/S)",
                pageName: "Importação Movimentação Veículo (E/S)",
            },
            {
                description: "09 - Importação Requisição Produto / Serviço",
                pageName: "Importação Requisição Produto / Serviço",
            },
        ],
    },
    {
        icon: <MdOutlineWarehouse size={iconSize} />,
        description: "Almoxarifado",
        pageName: "Almoxarifado",
        submenu: [
            {
                description: "01 - Consolidação do Almoxarifado",
                pageName: "Consolidação do Almoxarifado",
            },
            {
                description: "02 - Entrada de Produto / Serviço",
                pageName: "Entrada de Produto / Serviço",
            },
            {
                description: "03 - Expurgo de Produto / Serviço",
                pageName: "Expurgo de Produto / Serviço",
            },
            {
                description: "04 - Saída de Produto / Serviço",
                pageName: "Saída de Produto / Serviço",
            },
        ],
    },
];
