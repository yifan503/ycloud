'use client'

import styles from './cases.module.css'

export default function TypeImage(props) {

    return (
        <div className={styles.img_container}>
            <img src={props.src} alt="table image" className={styles.image} />
            <div className={styles.image_title}><span>{props.title}</span></div>
            <div className={styles.image_info}>{props.year}年作品</div>
            <div className={styles.image_info}>{props.project}</div>
        </div>
    )
}