'use client';

import styles from './HomeButton.module.css'
import { useRouter  } from "next/navigation";

type HomeButtonProps = {
    children: any;
    href: string;
}

export default function HomeButton(props: HomeButtonProps) {

    const route = useRouter();

    return (
        <div className={styles.home_button_container}
             onClick={() => route.push(props.href)}>
            {props.children}
        </div>
    )
}