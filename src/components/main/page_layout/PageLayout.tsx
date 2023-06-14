import styles from './PageLayout.module.css'
import Select from "@/components/main/select/Select";
import Link from "next/link";
import Input from "@/components/main/input/Input";

type PageLayoutProps = {
    title: string;
    children: any;
    menuItens?: any[];
}

export default function PageLayout(props: PageLayoutProps) {

    const institutions = [
        {id: 1, code: '01', description: "PREFEITURA MUNICIPAL DE SENADOR CANEDO"},
        {id: 2, code: '02', description: "FMS - FUNDO MUNICIPAL DE SAÚDE"},
        {id: 3, code: '03', description: "FME - FUNDO MUNICIPAL DE EDUCAÇÃO"},
        {id: 4, code: '04', description: "SMT - SECRETARIA MUNICIPAL DE TRANSITO"},
        {
            id: 5,
            code: '05',
            description: "FUNDO MUNICIPAL DE DIREITOS DA CRIANÇA E DO ADOLESCENTE DE BOM JESUS DE GOIÁS"
        },
    ]

    function renderMenuItem() {
        return props.menuItens?.map((item, index) => {
            return (
                <li key={index}>
                    <Link href={`${item.href}`} style={{color: "white"}}>
                        {item.description}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className={styles.pl_container}>
            <header className={styles.pl_header}>
                <h1>{props.title}</h1>
                <div style={{display: "flex", gap: "1rem"}}>
                    <Select options={institutions}/>
                    <Input type="date" className="date"/>
                </div>
            </header>
            <div className={styles.pl_sidebar_main}>
                <div className={styles.pl_sidebar}>
                    <div style={{marginBottom: "10px"}}>
                        <Input className="text" placeholder="Buscar menu"/>
                    </div>
                    <br/>
                    <div className={styles.pl_sidebar_item}>
                        <ul style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            {renderMenuItem()}
                        </ul>
                    </div>
                </div>
                <main className={styles.pl_main}>
                    <div className={styles.pl_main_header}>
                        <h2>Licitação</h2>
                    </div>
                    <div className={styles.pl_main_children}>
                        {props.children}
                    </div>
                </main>
            </div>
        </div>
    )
}