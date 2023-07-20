export interface Configuration {
    id?: number;
    module?: string;
    chave: string;
    value: string | number | readonly string[];
    description?: string;
    creationUserId?: number;
    creationDate?: string;
    chengeUserId?: number;
    changeDate?: string;
    changeReason?: string
}