import * as S from './styles';

type ModuleCardContainerProps = {
    children: React.ReactNode;
};

export const ModuleCardContainer = ({ children }: ModuleCardContainerProps) => {
    return <S.Container>{children}</S.Container>;
};
