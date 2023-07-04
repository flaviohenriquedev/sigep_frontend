"use client";

import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./page.module.css";

export default function Testes() {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ marginTop: "10rem" }}>
            <div
                className={`${styles.box} ${
                    checked ? styles.box_checked : styles.box_unchecked
                }`}
                onClick={() => setChecked(!checked)}
            >
                {checked && <BsCheck style={{ position: "absolute" }} />}
            </div>
        </div>
    );
}
