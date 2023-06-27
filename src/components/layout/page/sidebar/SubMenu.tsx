"use client";

import { SubMenuItem } from "@/@types/shopping/ShoppingTypes";
import { useRouter } from "next/navigation";
import { CSSProperties, useState } from "react";
import { BiLastPage } from "react-icons/bi";
import { LuArrowDownWideNarrow } from "react-icons/lu";

import styles from "./SubMenu.module.css";

type Props = {
    children: React.ReactNode;
    data: SubMenuItem;
};

export default function Item(props: Props) {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false);

    const style: CSSProperties = {
        display: `${show ? "inline-block" : "none"}`,
    };

    function handleClick() {
        if (props.children) {
            setShow(!show);
        } else {
            props.data.href &&
                router.push(`${props.data.href}?pn=${props.data.pageName}`);
        }
    }
    return (
        <li className={styles.submenu_container}>
            <div onClick={handleClick} className={styles.submenu}>
                <div
                    className={
                        props.children
                            ? styles.submenu_icon_list
                            : styles.submenu_icon_link
                    }
                >
                    {props.children ? (
                        <LuArrowDownWideNarrow />
                    ) : (
                        <BiLastPage size={15} />
                    )}
                </div>
                <div>
                    <div
                        className={styles.submenu_description}
                        style={{
                            fontWeight: props.children ? "bold" : "normal",
                        }}
                    >
                        {props.data.description}
                    </div>
                </div>
            </div>
            {props.children ? <ul style={style}>{props.children}</ul> : null}
        </li>
    );
}
