import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <div className={styles.name}>
                <strong>亿云</strong>
            </div> */}
            <div className={styles.row}>
                <div className={styles.title}>
                    <div className={styles.text}>始于2003年</div>
                    <div className={styles.text}>别墅｜豪宅｜高端定制整体解决方案</div>
                    <div className={styles.text}>全品类配套一站式私人订制服务</div>
                    <div className={styles.text}>联系电话：13901839676 梁先生</div>
                </div>
                <div className={styles.types}>
                    <span className={styles.text}>衣柜 / 橱柜 / 书柜 / 酒柜</span>
                    <span className={styles.text}>房门 / 移门 / 折叠门</span>
                    <span className={styles.text}>护墙板 / 楼梯</span>
                    <span className={styles.text}>意大利进口家居</span>
                </div>
                <div className={styles.qrcode}>二维码</div>

            </div>
            <div className={styles.bottom}>Copyright © 2023 - 2024 YIYUN. All Rights Reserved. 上海亿云建材 版权所有 </div>
        </footer>
    )
}