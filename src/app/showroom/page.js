import styles from './showroom.module.css';

export default function ShowRoom() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='/image/showroom_main.jpg' alt='showroom' className={styles.img} />
                    <div className={styles.overlay}>
                        <span className={styles.text}>展厅地址：上海市闵行区吴中路1388号红星欧丽环球家居4楼D8025</span>
                    </div>
                </div>
                <div className={styles.row_reverse}>
                    <img src='/image/showroom_statue.jpg' alt='showroom' className={styles.small_img} />
                </div>
            </div>
        </>
    )
}