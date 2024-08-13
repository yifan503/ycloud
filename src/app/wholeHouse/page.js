'use client'


import styles from './wholeHouse.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function WholeHouse() {

    const settings = {
        className: 'center',
        // centerMode: true,
        dots: true,
        dotsClass: styles.slick_dots,
        arrows: true,
        infinite: true,
        autoplay: true,
        // centerPadding: "60px",
        slidesToShow: 1,
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='/image/wholehouse.png' className={styles.head_img} alt='wholehouse' />
                    <div className={styles.head_text}>
                        <h1 className={styles.title}>全屋定制</h1>
                        <p>亿云高级定制，自2003年成立，专注于提供卓越的全屋定制解决方案，包括衣柜、橱柜、书柜等，精选进口及国产高级板材，融合传统工艺与现代设计。我们致力于以个性化服务和精湛工艺，为您打造既实用又具有美学价值的家居空间，让您的生活空间焕发独特魅力。</p>
                    </div>
                </div>
                <h2 className={styles.subtitle}>实拍细节展示</h2>
                <div className={styles.row}>
                    <div className={styles.slide_container} >

                        <Slider {...settings}>
                            <div >
                                <img src='/image/product_detail.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail2.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail3.jpg' alt='detail' className={styles.img} />
                            </div>
                        </Slider>
                    </div>
                </div>
                <h2 className={styles.subtitle2}>板材介绍</h2>
                <p className={styles.intro}>进口板材有：意大利可丽芙(CLEAF)、意大利Tabu木皮、 德国丽特曼、德国科尔木皮、德国克诺斯邦、比利时UNILIN、奥地利爱格等</p>
                <div className={styles.row}>
                    <img src='/image/board.png' className={styles.board} alt='board' />
                </div>
                <p className={styles.intro}>国产合作品牌免漆色板</p>
                <div className={styles.row}>
                    <img src='/image/board_cn.png' className={styles.board_cn} alt='board' />
                </div>
                <h2 className={styles.subtitle2}>定制流程</h2>
                <div className={styles.flow}>
                    <div className={styles.unit}>
                        <img src='/image/designer.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/price.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/money.png' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/factory.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/money.png' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/truck.png' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/after.png' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
            </div>
        </>
    )
}