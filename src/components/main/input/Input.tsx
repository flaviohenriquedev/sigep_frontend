'use client'

import styles from './Input.module.css'
import {useEffect, useRef} from "react";

type InputProps = {
    label?: string;
    id?: string;
    className: string;
    type?: string;
    placeholder?: string;
    widthAuto?: boolean;
}

export default function Input(props: InputProps) {

    const containerRef = useRef<any>('');

    useEffect(() => {
        if(props.widthAuto) {
            containerRef.current.style = 'width: 100%'
        }
    }, [props.widthAuto])

    return (
        <div className={styles.input_container}
             ref={containerRef}>
            {props.label && <label className={styles.label}>{props.label}</label>}
            <input
                className={`${styles.input} ${styles[props.className]}`}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
}