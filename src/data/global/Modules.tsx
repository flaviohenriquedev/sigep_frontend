import { BiPurchaseTag } from 'react-icons/bi';
import { BsCarFront, BsFileEarmarkPerson } from 'react-icons/bs';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';

import { Module } from '@/@types/global/GlobalTypes';
const iconSize: string | number = '60px';

export const modulesRoute: Module[] = [
    {
        title: 'COMPRAS',
        icon: <BiPurchaseTag size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos',
        href: '/manager/shopping'
    },
    {
        title: 'FROTAS',
        icon: <BsCarFront size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos',
        href: 'manager/fleet'
    },
    {
        title: 'RECURSOS HUMANOS',
        icon: <BsFileEarmarkPerson size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos'
    },
    {
        title: 'GESTÃO TRIBUTÁRIA',
        icon: <RiMoneyDollarCircleLine size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos'
    },
    {
        title: 'PROTOCOLO',
        icon: <HiOutlineClipboardDocumentList size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos'
    },
    {
        title: 'GESTÃO DE ISS',
        icon: <TbFileInvoice size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos'
    },
    {
        title: 'PATRIMÔNIO',
        icon: <MdOutlineRealEstateAgent size={iconSize} />,
        info: 'Aqui vão informações referentes a esse módulo, ou talvez os favoritos',
        href: 'manager/patrimony'
    }
];
