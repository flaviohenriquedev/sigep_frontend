"use client";

import { CSSProperties, useState } from "react";
import styles from "./SubMenu.module.css";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    children: React.ReactNode;
    description: string;
};

export default function Item(props: Props) {
    const [show, setShow] = useState<boolean>(false);

    const style: CSSProperties = {
        display: `${show ? "block" : "none"}`,
    };

    return (
        <li className={styles.submenu_container}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: "1rem",
                }}
                onClick={() => setShow(!show)}
                className={styles.submenu}
            >
                <div>
                    <div className={styles.submenu_description}>
                        {props.description}
                    </div>
                </div>
                {props.children && (
                    <div
                        className={`${styles.arrow} ${
                            !show ? styles.arrow_expanded : styles.arrow_closed
                        }`}
                    >
                        <IoIosArrowDown />
                    </div>
                )}
            </div>
            {props.children ? <ul style={style}>{props.children}</ul> : null}
        </li>
    );
}
