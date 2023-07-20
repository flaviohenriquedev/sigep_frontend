type ModuleCardTitleProps = {
    title?: string;
};

export const ModuleCardTitle = ({ title }: ModuleCardTitleProps) => {
    return <h3>{title}</h3>;
};
