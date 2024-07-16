'use client'

import styles from './cases.module.css'
import Link from "next/link";

export default function TypeImage(props) {

    return (
        <div className={styles.img_container}>
            <Link href={'/case_detail/' + props.id}>
                <img src={props.src} alt="table image" className={styles.image} />
                <div className={styles.image_title}>{props.title}</div>
            </Link>
        </div>
    )
}