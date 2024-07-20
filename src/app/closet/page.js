import Link from "next/link";
import styles from './closet.module.css';

export default function Closet() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.column}>
                    <img src='/image/wardrobes.png' alt='wardrobes' className={styles.img} />

                </div>
                <div className={styles.column}>
                    <div className={styles.text}>
                        <h1>步入式衣帽间</h1>
                        <span>衣帽间的精致除了科学合理的收纳分区布局外，</span>
                        <span>结构、美感与灯光也是极为重要的成分。</span>
                        <span>高定衣帽间从居住者的生活中汲取灵感，</span>
                        <span>匹配居住者的高级审美和品味生活需求。</span>

                    </div>
                    <img src='/image/wardrobes2.png' alt='wardrobes' className={styles.img} />

                </div>

            </div>
        </>
    )
}