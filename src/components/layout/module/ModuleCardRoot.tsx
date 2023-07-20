import * as S from './styles';

type ModuleCardRootProps = {
    children: React.ReactNode;
};

export const ModuleCardRoot = ({ children }: ModuleCardRootProps) => {
    return <S.Root>{children}</S.Root>;
};
