"use client";

import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
    value: boolean
}

const Checkbox = (props: CheckboxProps) => {

    const [checked, setChecked] = useState(props.value);

    return (
            <div
                className={`${styles.box} ${
                    checked ? styles.box_checked : styles.box_unchecked
                }`}
                onClick={() => setChecked(!checked)}
            >
                {checked && <BsCheck style={{ position: "absolute" }} />}
            </div>
    );
}

export default Checkbox

