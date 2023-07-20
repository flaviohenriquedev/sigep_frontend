'use client';

import { useRouter } from 'next/navigation';

import { ModuleCardTitle } from './ModuleCardTitle';
import * as S from './styles';

type ModuleCardInfoProps = {
    title?: string;
    href?: string;
};

export const ModuleCardInfo = ({ title, href = '/' }: ModuleCardInfoProps) => {
    const router = useRouter();

    function handleClick() {
        console.log(href);
        router.push(href);
    }

    return (
        <S.Info onClick={handleClick}>
            <ModuleCardTitle title={title} />
        </S.Info>
    );
};
