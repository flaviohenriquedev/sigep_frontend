import Link from "next/link";

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <Link href="/" className={styles.navbar}>Home</Link>
        </>
    )
}