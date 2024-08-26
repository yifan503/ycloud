import Link from "next/link";
import styles from './about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.rowContent}>
                {/* <img src='/image/showroom_table.png' alt="table image" style={{ width: '45rem', height: '20rem' }} /> */}
                <p style={{ padding: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={styles.rowContent}>
                <p style={{ padding: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <img src='/image/showroom_table.png' alt="table image" style={{ width: '45rem', height: '20rem' }} /> */}
            </div>
        </div>

    )
}