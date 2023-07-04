"use client";

import { ConfigType } from "@/@types/global/GlobalTypes";
import { useState } from "react";
import { BsDot } from "react-icons/bs";
import styles from "./ConfigModule.module.css";
import Checkbox from "@/components/common/checkbox/Checkbox";
import Input from "../../core/input/Input";

type ConfigModuleProps = {
    data?: ConfigType[];
    module?: string;
};

const ConfigModule = (props: ConfigModuleProps) => {
    const [values, setValues] = useState<{ [key: string]: string }>({});

    const dataFiltered = props.data
        ?.filter((d) => d.modulo === props.module)
        .sort();

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement>,
        key: string
    ) {
        const { value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    }

    function renderConfigs() {
        return (
            dataFiltered &&
            dataFiltered.map((d) => {
                const valor = d.valor ?? "";
                const booleanValue = d.valor === "TRUE" ? true : false;

                return (
                    <div style={{display: 'flex', gap: '1rem'}}>
                        <BsDot />
                        <div
                            key={d.id_configuracao}
                            className={styles.config_container}
                        >
                            {valor === "TRUE" || valor === "FALSE" ? (
                                <div className={styles.config_checkbox}>
                                    <Checkbox value={booleanValue} />
                                    <h5 className={styles.description}>
                                        {`${d.descricao} (${d.chave})`}
                                    </h5>
                                </div>
                            ) : (
                                <div className={styles.config_text}>
                                    <h5>{`${d.descricao} (${d.chave})`}</h5>
                                    <input
                                        style={{ width: "10rem" }}
                                        type="text"
                                        value={values[d.chave]}
                                        onChange={(e) =>
                                            handleInputChange(e, d.chave)
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })
        );
    }

    return (
        <div>
            <Input placeholder="Consultar configuração"/>
            <div className={styles.module_container}>{renderConfigs()}</div>
        </div>
    );
};

export default ConfigModule;
