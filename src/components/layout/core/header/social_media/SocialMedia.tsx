import {
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconBrandFacebook
} from '@tabler/icons-react';

import styles from './SocialMedia.module.css';

export default function SocialMedia() {
    return (
        <div className={styles.social_media_container}>
            <IconBrandInstagram />
            <IconBrandWhatsapp />
            <IconBrandFacebook />
        </div>
    );
}
