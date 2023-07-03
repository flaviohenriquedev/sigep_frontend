import Input from "@/components/layout/core/input/Input";
import Select from "@/components/layout/core/select/Select";
import { BsGearWide } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
    pageTittle: string;
    configRoute?: string;
};

const PageHeader = (props: PageHeaderProps) => {
    const router = useRouter();

    const instituitions = [
        { id: 1, code: 1, description: "PREFEITURA MUNICIPAL" },
        { id: 2, code: 2, description: "CÂMARA MUNICIPAL" },
        { id: 3, code: 3, description: "FUNDO EDUCACIONAL" },
        { id: 4, code: 4, description: "SECRETARIA DE SAÚDE" },
        { id: 5, code: 5, description: "SECRETARIA DE TRÂNSITO" },
    ];

    return (
        <header className={styles.pageheader_container}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "inherit",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <BsGearWide
                        size={25}
                        className={styles.config_icon}
                        onClick={() =>
                            props.configRoute && router.push(props.configRoute)
                        }
                    />
                    <h2>{props.pageTittle}</h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <Select options={instituitions} />
                    <Input className="date" type="date" />
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
