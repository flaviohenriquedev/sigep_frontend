'use client'

import { ConfigType } from "@/@types/global/GlobalTypes";
import { useState } from "react";
import styles from "./PageConfig.module.css";
import Checkbox from "@/components/common/checkbox/Checkbox";

type PageConfigProps = {
    data?: ConfigType[];
    module?: string;
};

const PageConfig = (props: PageConfigProps) => {
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
                const booleanValue = d.valor === 'TRUE' ? true : false;
                
                return (
                    <div
                        key={d.id_configuracao}
                        className={styles.config_container}
                    >
                        <h3 className={styles.key}>{d.chave}</h3>
                        {valor === "TRUE" || valor === "FALSE" ? (
                            <div className={styles.config_checkbox}>
                                <Checkbox value={booleanValue} />
                                <h5 className={styles.description}>
                                    {d.descricao}
                                </h5>
                            </div>
                        ) : (
                            <div className={styles.config_container}>
                                <h5 className={styles.description}>
                                    {d.descricao}
                                </h5>
                                <input
                                    type="text"
                                    value={values[d.chave]}
                                    onChange={(e) =>
                                        handleInputChange(e, d.chave)
                                    }
                                />
                            </div>
                        )}
                    </div>
                );
            })
        );
    }

    return <div className={styles.pageconfig_children}>{renderConfigs()}</div>;
};

export default PageConfig;
