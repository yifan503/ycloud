import Link from "next/link";
import styles from './closet.module.css';

export default function Closet() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img src='/image/door_detail.jpg' alt='door' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>衣帽间定制</h1>
                        <p className={styles.intro}>衣帽间的精致除了科学合理的收纳分区布局外，</p>
                        <p className={styles.intro}>结构、美感与灯光也是极为重要的成分。</p>
                        <p className={styles.intro}>高定衣帽间从居住者的生活中汲取灵感，匹配居住者的高级审美和品味生活需求。</p>
                    </div>
                </div>
                <div className={styles.intro_text_container}>
                    <h2 className={styles.sub_title}>衣帽间案例精选</h2>
                    <div className={styles.intro_text}>造型简单却设计感十足，金属框架打造的产品也不会呆板，让居住的生活简单而又富有精致美感。</div>
                </div>
                <div className={styles.row}>

                    <img src='/image/wardrobes2.png' alt='wardrobes' className={styles.img_up} />
                    <img src='/image/wardrobes3.jpg' alt='wardrobes' className={styles.img_down} />

                    <img src='/image/wardrobes.png' alt='wardrobes' className={styles.img_left} />


                </div>
                <div className={styles.row} >
                </div>

            </div>
        </>
    )
}