import styles from "./PageGraphics.module.css";

const GraphicsPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.pagegraphics_container}>
            <div className={styles.pagegraphics_children}>{children}</div>
        </div>
    );
};

export default GraphicsPage;
