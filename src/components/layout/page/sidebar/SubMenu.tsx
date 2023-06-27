"use client";

import { CSSProperties, useState } from "react";
import { useRouter } from "next/navigation";
import { BiLastPage } from "react-icons/bi";
import { LuListTree } from 'react-icons/lu'
import styles from "./SubMenu.module.css";
import { SubMenuItem } from "@/@types/shopping/ShoppingTypes";

type Props = {
    children: React.ReactNode;
    data: SubMenuItem;
};

export default function Item(props: Props) {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false);

    const style: CSSProperties = {
        display: `${show ? "block" : "none"}`,
    };

    function handleClick() {
        if (props.children) {
            setShow(!show)
        } else {
            props.data.href && router.push(`${props.data.href}?pn=${props.data.pageName}`)
        }
    }

    return (
        <li className={styles.submenu_container}>
            <div
                style={{
                    display: "flex",
                    gap: '1rem',
                    alignItems: "center",
                    paddingRight: "1rem",
                }}
                onClick={handleClick}
                className={styles.submenu}
            >
                {props.children ? <LuListTree /> : <BiLastPage size={15} />}
                <div>
                    <div className={styles.submenu_description}
                          style={{ fontWeight: props.children ? 'bold' : 'normal' }}>
                        {props.data.description}
                    </div>
                </div>
            </div>
            {props.children ? <ul style={style}>{props.children}</ul> : null}
        </li>
    );
}
