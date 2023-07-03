'use client'

import styles from './Input.module.css'
import {CSSProperties, useEffect, useRef} from "react";

type InputProps = {
    label?: string;
    id?: string;
    className?: string;
    type?: string;
    placeholder?: string;
    widthAuto?: boolean;
    width?: string | number
    value?: string | number | readonly string[] | undefined
    onChange?: (value: any) => void;
}

export default function Input(props: InputProps) {

    const containerRef = useRef<any>('');

    const style: CSSProperties = {
        width: props.width ? props.width : ''
    }

    useEffect(() => {
        if(props.widthAuto) {
            containerRef.current.style = 'width: 100%'
        }
    }, [props.widthAuto])

    return (
        <div className={styles.input_container}
             ref={containerRef}
             style={style}>
            {props.label && <label className={styles.label}>{props.label}</label>}
            <input
                className={`${styles.input} ${props.className && styles[props.className]}`}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
        </div>
    )
}