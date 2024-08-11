import styles from './door.module.css';

export default function Door() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img src='/image/door.jpg' alt='door' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>定制门系列</h1>
                        <p className={styles.intro}>从单开门到双开门，再到灵活的移门和便捷的折叠门，</p>
                        <p className={styles.intro}>每一款都凝聚着匠心独运的设计，完美融入您的家居空间，满足您对美学与实用性的双重追求。</p>
                    </div>
                </div>
                <div className={styles.title2}>
                    <h2>移门、折叠门</h2>
                </div>
                <div className={styles.row}>
                    <img src='/image/slidingDoor.png' alt='door' className={styles.slidingDoor} />
                    <img src='/image/slidingDoor2.png' alt='door' className={styles.slidingDoor} />
                    <img src='/image/slidingDoor3.png' alt='door' className={styles.slidingDoor} />
                </div>
                <div className={styles.title2}>
                    <h2>单开门</h2>
                </div>
                <div className={styles.row}>
                    <img src='/image/singleDoor.png' alt='door' className={styles.singleDoor} />
                    <img src='/image/singleDoor2.png' alt='door' className={styles.singleDoor2} />

                    <img src='/image/door2.jpg' alt='door' className={styles.head_img2} />
                </div>
            </div>
        </>
    )
}