'use client'

import styles from './cases.module.css'
import Link from "next/link";

export default function TypeImage(props) {

    return (
        <div className={styles.img_container}>
            <Link href='/case_detail'>
                <img src={props.src} alt="table image" className={styles.image} />
            </Link>
        </div>
    )
}