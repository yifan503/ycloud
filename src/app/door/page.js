import styles from './door.module.css';

export default function Door() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img src='http://cdn.yiyunjiancai.com/pages/door/door.jpg?imageslim' alt='door' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>定制门系列</h1>
                        <p className={styles.intro}>从单开门到双开门，再到灵活的移门和便捷的折叠门，</p>
                        <p className={styles.intro}>每一款都凝聚着匠心独运的设计，完美融入您的家居空间，满足您对美学与实用性的双重追求。</p>
                    </div>
                </div>
                <div className={styles.title2}>
                    <h2 className={styles.subtitle}>移门、折叠门</h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor2.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor3.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    {/* <img src='/image/slidingDoor2.png' alt='door' className={styles.slidingDoor} />
                    <img src='/image/slidingDoor3.png' alt='door' className={styles.slidingDoor} /> */}
                </div>
                <div className={styles.title2}>
                    <h2 className={styles.subtitle}>单开门</h2>
                </div>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor.png?imageslim' alt='door' className={styles.singleDoor} />
                    <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor2.png?imageslim' alt='door' className={styles.singleDoor2} />

                    <img src='http://cdn.yiyunjiancai.com/pages/door/door2.jpg?imageslim' alt='door' className={styles.head_img2} />
                </div>
            </div>
        </>
    )
}