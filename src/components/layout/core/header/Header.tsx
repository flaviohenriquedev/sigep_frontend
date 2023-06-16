import styles from './Header.module.css'

import {CgMenuGridR} from 'react-icons/cg'
import HomeButton from "@/components/layout/core/header/home_button/HomeButton";
import Client from "@/components/layout/core/header/client/Client";
import UserInfo from "@/components/layout/core/header/user_info/UserInfo";

export default function Header() {
    return (
        <header className={styles.header}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                <HomeButton href={"/"}>
                    <CgMenuGridR size={30}/>
                </HomeButton>
                <Client />
            </div>
            <UserInfo />
        </header>
    )
}