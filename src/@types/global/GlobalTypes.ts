export type ConfigType = {
    id_configuracao?: number | null;
    modulo?: string | null;
    chave?: string | null;
    valor?: string | number | readonly string[] | undefined | null;
    descricao?: string | null;
    id_usuario_criacao?: number | null;
    data_criacao?: string | null;
    id_usuario_alteracao?: number | null;
    data_alteracao?: string | null;
    motivo_alteracao?: string | null
}