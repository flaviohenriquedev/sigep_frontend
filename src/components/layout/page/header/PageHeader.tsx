import styles from './PageHeader.module.css'

const PageHeader = ({pageHeader}) => {
    return (
        <header className={styles.pageheader_container}>
            <h2>{pageHeader}</h2>
        </header>
    )
}

export default PageHeader