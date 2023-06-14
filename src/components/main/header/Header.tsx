import styles from './Header.module.css'
import Client from "@/components/main/header/client/Client";
import UserInfo from "@/components/main/header/user_info/UserInfo";
import HomeButton from "@/components/main/header/home_button/HomeButton";
import {IconHome2} from '@tabler/icons-react'

export default function Header() {
    return (
        <header className={styles.header}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                <HomeButton href={"/"}>
                    <IconHome2 />
                </HomeButton>
                <Client />
            </div>
            <UserInfo />
        </header>
    )
}