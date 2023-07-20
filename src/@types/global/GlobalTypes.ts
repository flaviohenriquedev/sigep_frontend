export type ConfigType = {
    id_configuracao?: number | null;
    modulo?: string | null;
    chave: string;
    valor: string | number | readonly string[];
    descricao?: string | null;
    id_usuario_criacao?: number | null;
    data_criacao?: string | null;
    id_usuario_alteracao?: number | null;
    data_alteracao?: string | null;
    motivo_alteracao?: string | null;
};

export type MenuItem = {
    icon: JSX.Element;
    description: string;
    pageName: string;
    href?: string;
    submenu?: SubMenuItem[];
};

export type SubMenuItem = {
    description: string;
    pageName?: string;
    href?: string;
    submenu?: SubMenuItem[];
};

export type Tab = {
    label: string;
    content: React.ReactNode;
};

export type TabsProps = {
    tabs: Tab[];
};

export type Module = {
    title: string;
    icon?: JSX.Element;
    info?: string;
    href?: string;
};
