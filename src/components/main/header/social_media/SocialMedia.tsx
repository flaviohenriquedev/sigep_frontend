import styles from './SocialMedia.module.css'

import {IconBrandInstagram, IconBrandWhatsapp, IconBrandFacebook} from '@tabler/icons-react'

export default function SocialMedia() {
    return (
        <div className={styles.social_media_container}>
            <IconBrandInstagram />
            <IconBrandWhatsapp />
            <IconBrandFacebook />
        </div>
    )
}