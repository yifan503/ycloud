'use client'

import styles from './contact.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ContactInfo() {

    const settings = {
        dots: true,
        dotsClass: styles.slick_dots,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className={styles.container}>

                <div className={styles.row}>
                    <img src='https://cdn.yiyunjiancai.com/showroom/showroom_table.png?imageslim' alt='table' className={styles.head_img} />
                    <img src='https://cdn.yiyunjiancai.com/pages/wholehouse/head_img1.JPG?imageslim' alt='table' className={styles.head_img_phone} />

                    <h1 className={styles.title_phone}>
                        联系我们
                    </h1>
                    <div className={styles.down_arrow}>
                        <svg t="1725106748909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32876" width="64" height="64"><path d="M818.7648 330.1888a38.4 38.4 0 0 1 54.8352 53.6064l-2.7648 2.816L512 717.8752 153.1648 386.5856A38.4 38.4 0 0 1 202.2144 327.68l3.0208 2.5344L512 613.3248l306.7648-283.136z" fill="#cdcdcd" p-id="32877"></path></svg>
                    </div>
                    <div className={styles.intro}>
                        <div className={styles.intro_content}>
                            <h2 className={styles.intro_title} >联系我们</h2>
                            <div className={styles.intro_text}>地址：上海市闵行区吴中路1388号红星欧丽环球家居6楼6N11</div>
                            <div className={styles.intro_text}>电话：13901839676 梁先生</div>
                            <div className={styles.intro_text}>微信/小红书：</div>
                            <div className={styles.qr_row}>
                                <img className={styles.qrcode} src='https://cdn.yiyunjiancai.com/qr_code.jpg?imageslim' alt='qrcode' />
                                <img className={styles.qrcode} src='https://cdn.yiyunjiancai.com/xhs_qr_code?imageslim' alt='qrcode' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.intro_phone}>
                    <h2 className={styles.h2}>联系方式</h2>
                    <div className={styles.intro_text}>地址：上海市闵行区吴中路1388号红星欧丽环球家居4楼D8025</div>
                    <div className={styles.intro_text}>电话：13901839676 梁先生</div>
                    <div className={styles.intro_text}>微信/小红书：</div>
                    <img className={styles.qrcode} src='https://cdn.yiyunjiancai.com/qr_code.jpg?imageslim' alt='qrcode' />
                    <img className={styles.qrcode} src='https://cdn.yiyunjiancai.com/xhs_qr_code?imageslim' alt='qrcode' />
                    <h2 className={styles.h2}>线下展厅</h2>
                    <div className={styles.slider_container}>
                        <Slider {...settings}>
                            <div className={styles.img_box}>
                                <img src='https://cdn.yiyunjiancai.com/showroom/showroom_p.JPG?imageslim' alt='showroom' className={styles.img} />
                            </div>
                            <div className={styles.img_box}>
                                <img src='https://cdn.yiyunjiancai.com/showroom/showroom_p2.JPG?imageslim' alt='showroom' className={styles.img} />
                            </div>
                            <div className={styles.img_box}>
                                <img src='https://cdn.yiyunjiancai.com/showroom/showroom_p3.JPG?imageslim' alt='showroom' className={styles.img} />

                            </div>
                        </Slider>
                    </div>
                    <h2 className={styles.h2}>品牌创立</h2>
                    <p className={styles.intro_text_p}>亿云高级定制，自2003年成立，专注于提供卓越的全屋定制解决方案，包括衣柜、橱柜、书柜等，精选进口及国产高级板材，融合传统工艺与现代设计。我们致力于以个性化服务和精湛工艺，为您打造既实用又具有美学价值的家居空间，让您的生活空间焕发独特魅力。</p>

                </div>
                <div className={styles.subtitle}>
                    <h2>定制流程</h2>
                </div>
                <div className={styles.flow}>
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/designer.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/price.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/factory.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/truck.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='https://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='https://cdn.yiyunjiancai.com/icons/after.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
            </div>
        </>
    )
}