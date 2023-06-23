"use client";

import { CSSProperties, useState } from "react";

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
        <li style={{ marginLeft: "2rem" }}>
            <div style={{ display: "flex" }} onClick={() => setShow(!show)}>
                <div>{props.description}</div>
            </div>
            {props.children ? <ul style={style}>{props.children}</ul> : null}
        </li>
    );
}
