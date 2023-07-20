"use client";

import { ConfigType } from "@/@types/global/GlobalTypes";

import Input from "../../core/input/Input";
import styles from "./ConfigModule.module.css";
import ConfigModuleItem from "./ConfigModuleItem";

type ConfigModuleProps = {
    data?: ConfigType[];
    module?: string;
};

const ConfigModule = (props: ConfigModuleProps) => {

    function compare(a: ConfigType, b: ConfigType) {
        if (a.chave && b.chave) {
            if (a.chave < b.chave) return -1;
            if (a.chave < b.chave) return 1;
        }
        return 0;
    }

    const dataFiltered = props.data
        ?.filter((d) => d.modulo === props.module)
        .sort(compare);

    function renderConfigs() {
        return (
            dataFiltered &&
            dataFiltered.map((d) => {
                
                return (
                    <ConfigModuleItem key={d.id_configuracao} data={d}/>
                );
            })
        );
    }
    
    return (
        <div>
            <Input placeholder="Consultar configuração" />
            <div className={styles.configmodule_container}>
                {renderConfigs()}
            </div>
        </div>
    );
};

export default ConfigModule;
