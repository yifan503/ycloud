import Link from "next/link";
import styles from './about.module.css'

export default function About() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Link href={'/'}>home</Link>
            </div>

        </div>
    )
}