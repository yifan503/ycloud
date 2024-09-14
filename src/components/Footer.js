import styles from './footer.module.css';

export default function Footer() {
    return (<>
        <footer className={styles.footer}>
            {/* <div className={styles.name}>
                <strong>亿云</strong>
            </div> */}
            <div className={styles.row}>
                <div className={styles.title}>
                    <div className={styles.text}>上海亿云 始于2003年</div>
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
                <div className={styles.qrcode}>
                    微信
                    <img src='https://cdn.yiyunjiancai.com/qr_code.jpg?imageslim' alt='qrcode' className={styles.qr} />
                </div>

            </div>
            <div className={styles.bottom}>
                {/* <span>
                    bei
                </span> */}
                <span>
                    Copyright © 2023 - 2024 YIYUN. All Rights Reserved. 上海亿云建材 版权所有 <a className={styles.icp} href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2024090209号-1</a>
                </span>
            </div>
        </footer>
        <footer className={styles.footer_phone}>
            {/* <span className={styles.text}>上海亿云 始于2003年</span>
            <span className={styles.text}>别墅｜豪宅｜高端定制整体解决方案</span>
            <span className={styles.text}>全品类配套一站式私人订制服务</span>
            <span className={styles.text}>联系电话：13901839676 梁先生</span> */}
            {/* <span className={styles.text}>微信咨询:</span>
            <div className={styles.row}>
                <img src='https://cdn.yiyunjiancai.com/qr_code.jpg?imageslim' alt='qrcode' className={styles.qr} />
            </div> */}
            <div className={styles.bottom}>
                <span>
                    Copyright © 2023 - 2024 YIYUN. All Rights Reserved. 上海亿云建材 版权所有 <a className={styles.icp} href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2024090209号-1</a>
                </span>
            </div>

        </footer>
    </>
    )
}