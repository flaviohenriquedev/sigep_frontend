import styles from './Client.module.css'

export default function Client() {
    return (
        <div className={styles.client_container}>
            <a href={"https://senadorcanedo.go.gov.br/"} target="_blank" rel="noopener noreferrer">
                <h3 style={{color: "white"}}>PREFEITURA MUNICIPAL DE SENADOR CANEDO</h3>
            </a>
        </div>
    )
}