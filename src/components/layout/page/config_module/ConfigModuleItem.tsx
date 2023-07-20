"use client";

import { ConfigType } from "@/@types/global/GlobalTypes";
import Checkbox from "@/components/common/checkbox/Checkbox";
import { useState, ChangeEvent } from "react";
import styles from "./ConfigModuleItem.module.css";

type ConfigModuleItemProps = {
    data: ConfigType;
};

const ConfigModuleItem = (props: ConfigModuleItemProps) => {
    const [openReasonForChange, setOpenReasonForChange] =
        useState<boolean>(false);
    const [value, setValue] = useState(props.data.valor);

    function handleOpenReasonForChange(
        e?: ChangeEvent<HTMLInputElement>,
        val?: string
    ) {
        if (e && e.target.value) {
            const novoValor = e.target.value;
            setValue(novoValor);
        } else if (val || val === "") {
            setValue(val);
        } else {
            setValue("");
        }

        setOpenReasonForChange(true);
    }

    return (
        <div
            key={props.data.id_configuracao}
            className={styles.configs_container}
        >
            <div className={styles.info}>
                <div className={styles.title}>
                    <label>Chave:</label>
                </div>
                <div
                    className={styles.description}
                    style={{ fontStyle: "italic" }}
                >
                    <p>{props.data.chave}</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <label>Descrição:</label>
                </div>
                <div className={styles.description}>
                    <p>{props.data.descricao}</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <label>Valor:</label>
                </div>
                {props.data.valor === "TRUE" || props.data.valor === "FALSE" ? (
                    <Checkbox
                        value={value}
                        setValue={() => handleOpenReasonForChange()}
                    />
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={handleOpenReasonForChange}
                    />
                )}
            </div>

            <div
                className={`${ openReasonForChange ? styles.reason_for_change_open : styles.reason_for_change } ${styles.info} `}
            >
                <div className={styles.title}>
                    <label>Motivo da alteração:</label>
                </div>
                <textarea className={styles.textarea}>
                    {props.data.motivo_alteracao}
                </textarea>
            </div>
        </div>
    );
};

export default ConfigModuleItem;
