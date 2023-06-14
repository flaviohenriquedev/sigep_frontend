'use client'

import styles from './Select.module.css'

type SelectProps = {
    options: any[];
}

export default function Select(props: SelectProps) {

    function renderOptions() {
        return props.options.map((option, index) => {
            return <option  key={index}
                            value={option.id}>
                {`${option.code} - ${option.description}`}
            </option>
        })
    }

    return (
            <select className={styles.select_container}>
                {renderOptions()}
            </select>
    )
}