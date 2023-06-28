import styles from "./PageGraphics.module.css";

const GraphicsPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.pagegraphics_children}>
            <div style={{margin: '1rem'}}>{children}</div>
        </div>
    );
};

export default GraphicsPage;
