'use client';

import styles from './HomeButton.module.css'
import { useRouter  } from "next/navigation";

type HomeButtonProps = {
    children: any;
    href: string;
}

export default function HomeButton(props: HomeButtonProps) {
    const route = useRouter();
    function handlerHome() {
        route.push(props.href)
        localStorage.removeItem('pageName')
    }

    return (
        <div className={styles.home_button_container}
             onClick={() => handlerHome()}>
            {props.children}
        </div>
    )
}