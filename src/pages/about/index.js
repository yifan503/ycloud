import Link from "next/link";
import styles from './about.module.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.header}>
            </div>
            <Link href={'/'}>home</Link>
        </div>
    )
}