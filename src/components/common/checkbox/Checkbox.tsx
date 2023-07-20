"use client";

import { useState, ChangeEvent } from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
    value: string | number | readonly string[];
    setValue?: (e?: ChangeEvent<HTMLInputElement>, val?: string) => void;
};

const Checkbox = (props: CheckboxProps) => {
    const booleanValue = props.value === "TRUE" ? true : false;
    const [checked, setChecked] = useState(booleanValue);

    function handleClick() {
        setChecked(!checked);

        if (props.setValue) {
            if (checked) {
                props.setValue(undefined, "TRUE");
            } else {
                props.setValue(undefined, "FALSE");
            }
        }
    }

    return (
        <div
            className={`${styles.box} ${
                checked ? styles.box_checked : styles.box_unchecked
            }`}
            onClick={handleClick}
        >
            {checked && <BsCheck style={{ position: "absolute" }} />}
        </div>
    );
};

export default Checkbox;
