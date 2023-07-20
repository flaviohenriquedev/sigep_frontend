'use client';

import { useState } from 'react';
import styles from './Tooltip.module.css';

type TooltipProps = {
    text: string;
    children: React.ReactNode;
};

const Tooltip = (props: TooltipProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className={styles.tooltip_container}>
            <div
                className={`${styles.tooltip_text} ${
                    isVisible
                        ? styles.tooltip_text_open
                        : styles.tooltip_text_closed
                }`}
            >
                {props.text}
            </div>

            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Tooltip;
