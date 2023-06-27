import styles from './PageHeader.module.css'
import Select from "@/components/layout/core/select/Select";
import Input from "@/components/layout/core/input/Input";

const PageHeader = ({ pageTittle }: { pageTittle: string }) => {

    const instituitions = [
        {id: 1, code: 1, description: 'PREFEITURA MUNICIPAL'},
        {id: 2, code: 2, description: 'CÂMARA MUNICIPAL'},
        {id: 3, code: 3, description: 'FUNDO EDUCACIONAL'},
        {id: 4, code: 4, description: 'SECRETARIA DE SAÚDE'},
        {id: 5, code: 5, description: 'SECRETARIA DE TRÂNSITO'},
    ]

    return (
        <header className={styles.pageheader_container}>
            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <h2>{pageTittle}</h2>
                <div style={{display: "flex", gap: "1rem"}}>
                    <Select options={instituitions} />
                    <Input className="date" type="date"/>
                </div>
            </div>

        </header>
    )
}

export default PageHeader