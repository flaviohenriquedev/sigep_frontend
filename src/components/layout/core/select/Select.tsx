'use client';

import { TSelect } from '@/@types/global/Select';
import styles from './Select.module.css';

type SelectProps = {
    options: TSelect[];
};

export default function Select(props: SelectProps) {
    function renderOptions() {
        return props.options.map((option) => {
            return (
                <option key={option.id} value={option.id}>
                    {`${option.code} - ${option.description}`}
                </option>
            );
        });
    }

    return (
        <select className={styles.select_container}>{renderOptions()}</select>
    );
}
