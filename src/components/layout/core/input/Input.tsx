'use client';

import { CSSProperties } from 'react';
import styles from './Input.module.css';

type InputProps = {
    label?: string;
    id?: string;
    className?: string;
    type?: string;
    placeholder?: string;
    widthAuto?: boolean;
    width?: string | number;
    value?: string | number | readonly string[] | undefined;
    onChange?: (value: string) => void;
};

export default function Input(props: InputProps) {
    const style: CSSProperties = {
        width: props.width ? props.width : ''
    };

    return (
        <div className={styles.input_container}>
            {props.label && (
                <label className={styles.label}>{props.label}</label>
            )}
            <input
                className={`${styles.input} ${
                    props.className && styles[props.className]
                }`}
                style={style}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) =>
                    props.onChange && props.onChange(e.target.value)
                }
            />
        </div>
    );
}
