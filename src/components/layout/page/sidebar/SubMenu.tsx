"use client";

import { CSSProperties, useState } from "react";
import styles from "./SubMenu.module.css";
import { BiLastPage } from "react-icons/bi";
import { LuListTree } from 'react-icons/lu'

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
                    gap: '1rem',
                    alignItems: "center",
                    paddingRight: "1rem",
                }}
                onClick={() => setShow(!show)}
                className={styles.submenu}
            >
                {props.children ? <LuListTree /> : <BiLastPage size={15} />}
                <div>
                    <div className={styles.submenu_description}
                          style={{ fontWeight: props.children ? 'bold' : 'normal' }}>
                        {props.description}
                    </div>
                </div>
            </div>
            {props.children ? <ul style={style}>{props.children}</ul> : null}
        </li>
    );
}
