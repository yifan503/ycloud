'use client'

import styles from './contact.module.css';

export default function ContactInfo() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/showroom/showroom_table.png?imageslim' alt='table' className={styles.head_img} />
                    <div className={styles.intro}>
                        <div className={styles.intro_content}>
                            <h2 className={styles.intro_title} >联系我们</h2>
                            <div className={styles.intro_text}>地址：上海市闵行区吴中路1388号红星欧丽环球家居4楼D8025</div>
                            <div className={styles.intro_text}>电话：13901839676 梁先生</div>
                            <div className={styles.intro_text}>微信：</div>
                            <div className={styles.qr_row}>
                                <img className={styles.qrcode} src='/image/QR.jpg' alt='qrcode' />
                                <img className={styles.qrcode} src='/image/QR.jpg' alt='qrcode' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.subtitle}>
                    <h2>定制流程</h2>
                </div>
                <div className={styles.flow}>
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/designer.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/price.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/factory.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/truck.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/after.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
            </div>
        </>
    )
}