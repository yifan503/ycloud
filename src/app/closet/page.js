import Link from "next/link";
import styles from './closet.module.css';

export default function Closet() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='/image/wardrobes.png' alt='wardrobes' className={styles.head_img} />
                    <div className={styles.text}>
                        <h1>衣帽间定制</h1>
                        <p>衣帽间的精致除了科学合理的收纳分区布局外，</p>
                        <span>结构、美感与灯光也是极为重要的成分。</span>
                        <p>高定衣帽间从居住者的生活中汲取灵感，</p>
                        <p>匹配居住者的高级审美和品味生活需求。</p>
                    </div>
                </div>
                <div className={styles.intro_text_container}>
                    <h2>衣帽间案例精选</h2>
                    <div className={styles.intro_text}>造型简单却设计感十足，金属框架打造的产品也不会呆板，让居住的生活简单而又富有精致美感。</div>
                </div>
                <div className={styles.row}>
                    <img src='/image/wardrobes2.png' alt='wardrobes' className={styles.img} />
                    <img src='/image/wardrobes3.jpg' alt='wardrobes' className={styles.img} />
                    <img src='/image/wardrobes4.jpg' alt='wardrobes' className={styles.img} />


                </div>
                {/* <div className={styles.column}>
                    <div className={styles.text}>
                        <h1>步入式衣帽间</h1>
                        <span>衣帽间的精致除了科学合理的收纳分区布局外，</span>
                        <span>结构、美感与灯光也是极为重要的成分。</span>
                        <span>高定衣帽间从居住者的生活中汲取灵感，</span>
                        <span>匹配居住者的高级审美和品味生活需求。</span>

                    </div>
                    <img src='/image/wardrobes2.png' alt='wardrobes' className={styles.img} />

                </div> */}

            </div>
        </>
    )
}