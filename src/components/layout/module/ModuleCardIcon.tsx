import * as S from './styles';

type ModuleCardIconProps = {
    icon?: JSX.Element;
};

export const ModuleCardIcon = ({ icon }: ModuleCardIconProps) => {
    return <S.Icon>{icon}</S.Icon>;
};
