import { ConfigType } from '@/@types/global/GlobalTypes';

export const GlobalConfigs: ConfigType[] = [
    {
        id_configuracao: 1,
        modulo: 'GB',
        chave: 'CLIENT_NAME',
        valor: 'Município de Jataí',
        descricao: 'Configuração Acerca do Nome do Cliente',
        id_usuario_criacao: 2,
        data_criacao: '2022-03-10T00:00:00',
        id_usuario_alteracao: 2,
        data_alteracao: '2022-03-10T00:00:00',
        motivo_alteracao: null
    },
    {
        id_configuracao: 2,
        modulo: 'GB',
        chave: 'ACCOUNTANT_ENABLED',
        valor: 'TRUE',
        descricao: 'Habilitando Modulo de Contabilidade',
        id_usuario_criacao: 2,
        data_criacao: '2022-03-10T00:00:00',
        id_usuario_alteracao: 2,
        data_alteracao: '2022-03-10T00:00:00',
        motivo_alteracao: null
    }
];

export const ThemeConfig = [
    {
        theme: 'default',
        title: 'Padrão',
        buttonColor: 'blue'
    },
    {
        theme: 'dark',
        title: 'Tema Escuro',
        buttonColor: 'black'
    },
    {
        theme: 'red',
        title: 'Tema Vermelho',
        buttonColor: 'red'
    }
];
