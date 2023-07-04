import { ConfigType } from "@/@types/global/GlobalTypes";
import styles from "./PageConfig.module.css";

type PageConfigProps = {
    data?: ConfigType[];
    module?: string;
};

const PageConfig = (props: PageConfigProps) => {
    const dataFiltered = props.data
        ?.filter((d) => d.modulo === props.module)
        .sort();

    function renderConfigs() {
        return (
            dataFiltered &&
            dataFiltered.map((d) => {
                const valor = d.valor ?? "";
                return (
                    <div key={d.id_configuracao} className={styles.config_container}>
                        <div>
                            <h3>{d.chave}</h3>
                            {d.valor === "TRUE" || d.valor === "FALSE" ? (
                                <div className={styles.config_checkbox}>
                                    <input type="checkbox" />
                                    <h5>{d.descricao}</h5>
                                </div>
                            ) : (
                                <div className={styles.config_container}>
                                    <h5>{d.descricao}</h5>
                                    <input type="text" value={valor}/>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })
        );
    }

    return (
        <div className={styles.pagegraphics_children}>{renderConfigs()}</div>
    );
};

export default PageConfig;
