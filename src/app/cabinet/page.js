import Link from "next/link";
import styles from './cabinet.module.css';

export default function Cabinet() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='/image/cabinet3.png' alt='wardrobes' className={styles.head_img} />
                    <div className={styles.text}>
                        <h1>柜体定制</h1>
                        <p>有条不紊、抛却繁杂是所有人都向往的井然有序的生活。</p>
                        <p>意式储物柜将传统杂物储藏空间，置于日常生活中更加触手可及的地方管理储物空间秩序。</p>
                    </div>
                </div>
                <div className={styles.intro_text_container}>
                    <h2>橱柜</h2>
                    <div className={styles.intro_text}>厨房作为生活的核心部分，在审美性、功能性，融入室内装饰的选材方面，都做出了细致的考量，使功能和空间相互作用，提高空间利用率。</div>
                </div>
                <div className={styles.row}>
                    <img src='/image/cupboard3.jpg' alt='wardrobes' className={styles.img} />
                    <img src='/image/cupboard4.jpg' alt='wardrobes' className={styles.img} />
                    {/* <img src='/image/cupboard5.png' alt='wardrobes' className={styles.img} /> */}

                </div>
                <div className={styles.intro_text_container}>
                    <h2>酒柜、装饰柜</h2>
                    <div className={styles.intro_text}>低调内敛的风格和大量精致的细节使意式成为最受欢迎的设计之一。通过建设与居所空间融为一体的方式,利用模块化的组件和材料创造无限自由性及可能性。</div>
                </div>
                <div className={styles.row}>
                    <img src='/image/cabinet4.png' alt='wardrobes' className={styles.img} />
                    <img src='/image/gradevin.jpg' alt='wardrobes' className={styles.img} />
                    <img src='/image/gradevin2.jpg' alt='wardrobes' className={styles.img} />

                </div>
                <div className={styles.intro_text_container}>
                    <h2>卫浴柜</h2>
                    <div className={styles.intro_text}>低调内敛的风格和大量精致的细节使意式成为最受欢迎的设计之一。通过建设与居所空间融为一体的方式,利用模块化的组件和材料创造无限自由性及可能性。</div>
                </div>
                <div className={styles.row}>
                    <img src='/image/cabinet2.png' alt='wardrobes' className={styles.img} />
                </div>

            </div>
        </>
    )
}