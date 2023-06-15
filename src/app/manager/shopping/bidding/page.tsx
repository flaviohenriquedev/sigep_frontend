import styles from "./page.module.css";
import Input from "@/components/main/input/Input";

export default function BiddingPage() {
    return (
        <div
            className={styles.biddingpage_container}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <form>
                <Input className="text" label={`Exemplo`} />
            </form>
        </div>
    );
}
