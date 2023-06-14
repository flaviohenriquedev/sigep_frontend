import styles from './PageLayout.module.css'
import Select from "@/components/main/select/Select";
import Link from "next/link";
import Input from "@/components/main/input/Input";

type PageLayoutProps = {
    title: string;
    children: any;
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

    return (
        <div className={styles.pl_container}>
            <header className={styles.pl_header}>
                <h1>{props.title}</h1>
                <Select options={institutions}/>
                <Input type="date" className="date"/>
            </header>
            <div className={styles.pl_sidebar_main}>
                <div className={styles.pl_sidebar}>
                    <div style={{marginBottom: "10px"}}>
                        <Input className="text" placeholder="Buscar menu"/>
                    </div>
                    <br/>
                    <div className={styles.pl_sidebar_item}>
                        <ul style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/bidding`} style={{color: "white"}}>
                                    Licitação
                                </Link>
                            </li>
                            <li>
                                <Link href={`manager/shopping/request_purchase`} style={{color: "white"}}>
                                    Solicitação de Compra
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <main className={styles.pl_main}>
                    {props.children}
                </main>
            </div>
        </div>
    )
}